import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { post } from './sanity/schemas/post'
import { ADMIN_BASE_PATH } from './config'

export default defineConfig({
  name: 'default',
  title: 'eduvallve Portfolio Blog',

  projectId: 'ekv3t3dq',
  dataset: 'production',
  basePath: ADMIN_BASE_PATH,

  plugins: [structureTool()],

  schema: {
    types: [post],
  },
})
