import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { client, urlFor } from '../../sanity/client'
import { PortableText } from '@portabletext/react'

const BlogPostPage = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          title,
          mainImage,
          publishedAt,
          body,
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

  if (loading) return <div className="blog-loading">Loading...</div>
  if (!post) return <div className="blog-error">Post not found</div>

  const components = {
    types: {
      image: ({ value }) => (
        <figure className="blog-post__figure">
          <img
            src={urlFor(value).width(1200).url()}
            alt={value.alt || 'Blog image'}
            className="blog-post__image"
          />
          {value.caption && <figcaption>{value.caption}</figcaption>}
        </figure>
      ),
    },
  }

  return (
    <article className="blog-post">
      <header className="blog-post__header">
        <div className="container">
          <Link to="/blog" className="back-link">← Back to Blog</Link>
          <h1>{post.title}</h1>
          <div className="blog-post__meta">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('ca-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <div className="blog-post__tags">
              {post.tags?.map((tag) => (
                <span key={tag} className="tag">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {post.mainImage && (
        <div className="blog-post__main-image">
          <img
            src={urlFor(post.mainImage).width(1400).url()}
            alt={post.title}
          />
        </div>
      )}

      <div className="blog-post__content container">
        <div className="grid-desktop grid-desktop-12-cols">
          <div className="grid-desktop-3-10 grid-mobile-1-4">
            <PortableText value={post.body} components={components} />
          </div>
        </div>
      </div>
    </article>
  )
}

export default BlogPostPage
