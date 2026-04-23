import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'ekv3t3dq',
  dataset: 'production',
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2024-03-24',
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
