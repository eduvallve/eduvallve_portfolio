import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'

export const client = createClient({
  projectId: 'ekv3t3dq',
  dataset: 'production',
  useCdn: isLocalhost ? false : true,
  apiVersion: '2024-03-24',
  token: isLocalhost ? process.env.REACT_APP_SANITY_TOKEN : undefined,
  perspective: isLocalhost ? 'previewDrafts' : 'published',
})


const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
