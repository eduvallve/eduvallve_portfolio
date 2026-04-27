import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { documentInternationalization } from '@sanity/document-internationalization'
import { post } from './sanity/schemas/post'
import siteSettings from './sanity/schemas/siteSettings';
import { ADMIN_BASE_PATH } from './config'

export default defineConfig({
  name: 'default',
  title: 'eduvallve Portfolio Blog',

  projectId: 'ekv3t3dq',
  dataset: 'production',
  basePath: ADMIN_BASE_PATH,

  plugins: [
    structureTool(),
    documentInternationalization({
      supportedLanguages: [
        { id: 'en', title: 'English' },
        { id: 'ca', title: 'Catalan' },
      ],
      schemaTypes: ['post', 'siteSettings'],
    }),
  ],

  schema: {
    types: [post, siteSettings],
  },
})
