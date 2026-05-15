import { useState, useEffect, useRef, useContext, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import { client, urlFor } from '../../sanity/client'
import ReactMarkdown from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TranslationContext } from '../../Layout'
import i18n from '../../i18n'

import SEO from '../atoms/atoms.seo'

gsap.registerPlugin(ScrollTrigger);

/**
 * CodeBlock: Wraps fenced code blocks with a language badge and a copy-to-clipboard button.
 */
const CodeBlock = ({ children, className }) => {
  const [copied, setCopied] = useState(false);
  const language = className ? className.replace('language-', '') : '';
  const code = String(children).replace(/\n$/, '');

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);

  return (
    <div className="code-block">
      <div className="code-block__header">
        {language && <span className="code-block__lang">{language}</span>}
        <button
          className={`code-block__copy-btn ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
          aria-label={copied ? 'Copied!' : 'Copy code'}
        >
          {copied ? '✓ Copied!' : 'Copy'}
        </button>
      </div>
      <pre><code className={className}>{code}</code></pre>
    </div>
  );
};

const BlogPostPage = () => {
  const { slug, lang } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const { setTranslations } = useContext(TranslationContext)

  const heroRef = useRef(null)
  const contentRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && slug.current == $slug && language == $lang][0]{
          _id,
          "isDraft": _id in path("drafts.**"),
          title,
          excerpt,
          "heroImage": heroImage{
            ...,
            "alt": asset->altText
          },
          publishedAt,
          body,
          "tags": tags[],
          "translations": coalesce(
            *[_type == "translation.metadata" && references(^._id)][0].translations[].value->{
              language,
              "slug": slug.current
            },
            *[_type == "post" && _id match "*" + string::split(^._id, "-")[1] && _id != ^._id]{
              language,
              "slug": slug.current
            }
          ),
          "relatedPosts": *[_type == "post" && language == $lang && slug.current != $slug] | order(count(tags[@ in ^.tags]) desc, publishedAt desc) [0...3] {
            title,
            "slug": slug.current,
            publishedAt,
            "thumbnailImage": thumbnailImage{
              ...,
              "alt": asset->altText
            }
          }
        }`,
        { slug, lang: lang || 'en' }
      )
      .then((data) => {
        if (data) {
          setPost(data)
          const mapping = {};
          if (data.translations) {
            data.translations.forEach(t => {
              mapping[t.language] = t.slug;
            });
          }
          mapping[lang || 'en'] = slug;
          setTranslations(mapping);
        }
        setLoading(false)
      })
      .catch(console.error)
  }, [slug, lang, setTranslations])

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight > 0) {
        setProgress((window.scrollY / scrollHeight) * 100)
      }
    }
    window.addEventListener('scroll', updateProgress)
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  useEffect(() => {
    if (!loading && post) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const ctx = gsap.context(() => {
        if (prefersReducedMotion) {
          gsap.from([titleRef.current, contentRef.current], {
            opacity: 0,
            duration: 0.5,
            ease: 'none'
          });
          return;
        }

        gsap.from(titleRef.current, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: 'power4.out',
          delay: 0.2
        })

        gsap.from('.blog-post__meta-item', {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.6
        })

        gsap.from(contentRef.current, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 85%',
          }
        })

        if (post.heroImage?.asset) {
          gsap.to('.blog-post__hero-bg img', {
            y: '20%',
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true
            }
          })
        }
      })
      return () => ctx.revert()
    }
  }, [loading, post])

  if (loading) return <div className="blog-loading" aria-live="polite">Loading...</div>
  if (!post) return <div className="blog-error" role="alert">Post not found</div>

  const ogImageUrl = post.heroImage?.asset ? urlFor(post.heroImage).width(1200).height(630).url() : '';
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        image={ogImageUrl}
        url={currentUrl}
        type="article"
        lang={lang}
      />
      <article className="blog-post" lang={lang}>
        <div
          className="blog-progress-container"
          role="progressbar"
          aria-label="Progrés de lectura"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={Math.round(progress)}
        >
          <div
            className="blog-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

        <header
          className={`blog-post__hero ${post.heroImage?.asset ? 'has-image' : ''}`}
          ref={heroRef}
        >
          {post.heroImage?.asset && (
            <div className="blog-post__hero-bg">
              <img
                src={urlFor(post.heroImage).width(1920).url()}
                alt={post.heroImage.alt || ""}
              />
              <div className="blog-post__hero-overlay" aria-hidden="true" />
            </div>
          )}

          <div className="container blog-post__hero-content">
            <Link
              to={`/${lang}/blog`}
              className="blog-post__back"
            >
              ← {i18n.t('blog.back')}
            </Link>

            <h1 ref={titleRef}>{post.title}</h1>

            <div className="blog-post__meta">
              <div className="blog-post__meta-item">
                <span className="label">Published on</span>
                <div className="blog-post__date-container">
                  {post.isDraft && (
                    <span className="badge badge--draft">DRAFT</span>
                  )}
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString(lang === 'ca' ? 'ca-ES' : 'en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
              </div>

              {post.tags && post.tags.length > 0 && (
                <div className="blog-post__meta-item">
                  <span className="label">Tags</span>
                  <div className="blog-post__tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="tag">#{tag}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        <section className="blog-post__content container" ref={contentRef}>
          <div className="grid-desktop grid-desktop-12-cols">
            <div className="grid-desktop-3-10 grid-mobile-1-4">
              <div className="blog-post__body">
                {typeof post.body === 'string' ? (
                  <ReactMarkdown
                    rehypePlugins={[rehypeSlug]}
                    components={{
                      h2: ({ children }) => <h2 className="blog-post__h2">{children}</h2>,
                      h3: ({ children }) => <h3 className="blog-post__h3">{children}</h3>,
                      blockquote: ({ children }) => <blockquote className="blog-post__quote">{children}</blockquote>,
                      a: ({ children, href }) => <a href={href} target="_blank" rel="noreferrer noopener" className="blog-post__link">{children}</a>,
                      code: ({ className, children }) => {
                        // Block code (```) has a language className OR multiline content.
                        // Inline code (`) has neither.
                        const isBlock = Boolean(className) || String(children).includes('\n');
                        if (!isBlock) return <code className="blog-post__inline-code">{children}</code>;
                        return <CodeBlock className={className}>{children}</CodeBlock>;
                      }
                    }}
                  >
                    {post.body}
                  </ReactMarkdown>
                ) : (
                  <p>Old content format not supported anymore. Please update in Sanity.</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <section className="blog-related container">
            <h2 className="blog-related__title">{lang === 'ca' ? 'Articles relacionats' : 'Related posts'}</h2>
            <div className="blog-related__grid">
              {post.relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  to={`/${lang}/blog/${related.slug}`}
                  className="blog-related__card"
                >
                  {related.thumbnailImage?.asset && (
                    <div className="blog-related__card-image">
                      <img
                        src={urlFor(related.thumbnailImage).width(400).url()}
                        alt={related.thumbnailImage.alt || ""}
                      />
                    </div>
                  )}
                  <div className="blog-related__card-content">
                    <time dateTime={related.publishedAt}>
                      {new Date(related.publishedAt).toLocaleDateString(lang === 'ca' ? 'ca-ES' : 'en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                    <h3>{related.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  )
}

export default BlogPostPage
