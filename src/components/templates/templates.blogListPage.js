import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { client, urlFor } from '../../sanity/client'
import { useTranslation } from 'react-i18next'

const BlogListPage = () => {
  const [posts, setPosts] = useState([])
  const [settings, setSettings] = useState(null)
  const [loading, setLoading] = useState(true)
  const { t } = useTranslation()

  const { lang } = useParams();

  useEffect(() => {
    // Fetch both posts and site settings for the blog header
    const fetchData = async () => {
      try {
        const [postsData, settingsData] = await Promise.all([
          client.fetch(
            `*[_type == "post" && language == $lang] | order(publishedAt desc) {
              _id,
              title,
              slug,
              publishedAt,
              excerpt,
              heroImage,
              thumbnailImage,
              "tags": tags[]
            }`,
            { lang: lang || 'en' }
          ),
          client.fetch(
            `*[_type == "siteSettings" && language == $lang][0]`,
            { lang: lang || 'en' }
          )
        ]);

        setPosts(postsData);
        setSettings(settingsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [lang])

  if (loading) return <div className="blog-loading">{t('common.loading')}</div>

  const {
    blogTitle = "Blog",
    blogSubtitle = "Thoughts, tutorials and news about web development and design."
  } = (settings || {});

  return (
    <main className="blog-list-page grid-mobile grid-mobile-4-cols grid-desktop grid-desktop-12-cols">
      <section className="blog-hero">
        <div className="container">
          <h1>{blogTitle}</h1>
          <p>{blogSubtitle}</p>
        </div>
      </section>

      <section className="blog-grid container">
        {posts.length > 0 ? (
          <div className="grid-desktop grid-desktop-3-cols grid-mobile grid-mobile-1-cols">
            {posts.map((post) => (
              <Link
                key={post.slug.current}
                to={`/${lang}/blog/${post.slug.current}`}
                className="blog-card"
              >
                <div className="blog-card__image">
                  {post.thumbnailImage?.asset ? (
                    <img
                      src={urlFor(post.thumbnailImage).width(600).url()}
                      alt={post.title}
                    />
                  ) : post.heroImage?.asset ? (
                    <img
                      src={urlFor(post.heroImage).width(600).url()}
                      alt={post.title}
                    />
                  ) : null}
                </div>
                <div className="blog-card__content">
                  <div className="blog-card__meta-info">
                    <span className="blog-card__date">
                      {new Date(post.publishedAt).toLocaleDateString(lang === 'ca' ? 'ca-ES' : 'en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <div className="blog-card__tags">
                    {post.tags?.map((tag) => (
                      <span key={tag} className="tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="no-posts">{t('blog.noPosts')}</p>
        )}
      </section>
    </main>
  )
}

export default BlogListPage
