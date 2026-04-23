import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { client, urlFor } from '../../sanity/client'
import { PortableText } from '@portabletext/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const BlogPostPage = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  const heroRef = useRef(null)
  const contentRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          title,
          "mainImage": mainImage{
            ...,
            "alt": asset->altText // Fetch alt text if it exists in assets
          },
          publishedAt,
          body[]{
            ...,
            _type == "image" => {
              ...,
              "alt": asset->altText
            }
          },
          "tags": tags[]
        }`,
        { slug }
      )
      .then((data) => {
        setPost(data)
        setLoading(false)
      })
      .catch(console.error)
  }, [slug])

  // Reading progress logic
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

  // GSAP Animations with Reduced Motion check
  useEffect(() => {
    if (!loading && post) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const ctx = gsap.context(() => {
        if (prefersReducedMotion) {
          // Subtle fade-in only for accessibility
          gsap.from([titleRef.current, contentRef.current], {
            opacity: 0,
            duration: 0.5,
            ease: 'none'
          });
          return;
        }

        // Standard animations
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

        // Parallax effect for hero background
        if (post.mainImage) {
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

  const components = {
    types: {
      image: ({ value }) => (
        <figure className="blog-post__figure">
          <div className="blog-post__figure-container">
            <img
              src={urlFor(value).width(1200).url()}
              alt={value.alt || `Imatge descriptiva de l'article: ${post.title}`}
              className="blog-post__image"
            />
          </div>
          {value.caption && <figcaption>{value.caption}</figcaption>}
        </figure>
      ),
    },
    block: {
      h2: ({ children }) => <h2 className="blog-post__h2">{children}</h2>,
      h3: ({ children }) => <h3 className="blog-post__h3">{children}</h3>,
      blockquote: ({ children }) => <blockquote className="blog-post__quote">{children}</blockquote>,
    }
  }

  return (
    <article className="blog-post" lang="ca">
      {/* Progress Bar with ARIA attributes */}
      <div
        className="blog-progress-container"
        role="progressbar"
        aria-label="Progrés de lectura de l'article"
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
        className={`blog-post__hero ${post.mainImage ? 'has-image' : ''}`}
        ref={heroRef}
      >
        {post.mainImage && (
          <div className="blog-post__hero-bg">
            <img
              src={urlFor(post.mainImage).width(1920).url()}
              alt={post.mainImage.alt || ""}
              aria-hidden={!post.mainImage.alt}
            />
            <div className="blog-post__hero-overlay" aria-hidden="true" />
          </div>
        )}

        <div className="container blog-post__hero-content">
          <Link
            to="/blog"
            className="blog-post__back"
            aria-label="Tornar al llistat d'articles del blog"
          >
            <span className="icon-back" aria-hidden="true">←</span> Tornar al blog
          </Link>

          <h1 ref={titleRef}>{post.title}</h1>

          <div className="blog-post__meta">
            <div className="blog-post__meta-item">
              <span className="label">Publicat el</span>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('ca-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="blog-post__meta-item">
                <span className="label">Etiquetes</span>
                <div className="blog-post__tags" aria-label="Llista d'etiquetes">
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
          <div className="grid-desktop-x-center grid-desktop-3-10 grid-mobile-1-4">
            <div className="blog-post__body">
              <PortableText value={post.body} components={components} />
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}

export default BlogPostPage
