import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { client, urlFor } from '../../sanity/client'
import { scrollUp } from '../../utils/utils.js'

const BlogListPage = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] | order(publishedAt desc) {
          title,
          slug,
          publishedAt,
          excerpt,
          heroImage,
          thumbnailImage,
          "tags": tags[]
        }`
      )
      .then((data) => {
        setPosts(data)
        setLoading(false)
      })
      .catch(console.error)
  }, [])

  if (loading) return <div className="blog-loading">Loading...</div>

  return (
    <main className="blog-list-page grid-mobile grid-mobile-4-cols grid-desktop grid-desktop-12-cols">
      <section className="blog-hero">
        <div className="container">
          <h1>Blog</h1>
          <p>Thoughts, tutorials and news about web development and design.</p>
        </div>
      </section>

      <section className="blog-grid container">
        {posts.length > 0 ? (
          <div className="grid-desktop grid-desktop-12-cols grid-mobile grid-mobile-4-cols">
            {posts.map((post) => (
              <Link
                key={post.slug.current}
                to={`/blog/${post.slug.current}`}
                className="blog-card grid-desktop-1-4 grid-mobile-1-4"
                onClick={() => scrollUp()}
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
                  <span className="blog-card__date" aria-label={`Published on ${new Date(post.publishedAt).toLocaleDateString('en-US')}`}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
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
          <p className="no-posts">No posts found yet. Check back soon!</p>
        )}
      </section>
    </main>
  )
}

export default BlogListPage
