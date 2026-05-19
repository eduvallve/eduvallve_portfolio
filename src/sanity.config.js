import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { documentInternationalization } from '@sanity/document-internationalization'
import { post } from './sanity/schemas/post'
import siteSettings from './sanity/schemas/siteSettings';
import { category } from './sanity/schemas/category'
import { ADMIN_BASE_PATH } from './config'

import SocialPreview from './sanity/components/SocialPreview'
import { markdownSchema } from 'sanity-plugin-markdown'

export default defineConfig({
  name: 'default',
  title: 'eduvallve Portfolio Blog',

  projectId: 'ekv3t3dq',
  dataset: 'production',
  basePath: ADMIN_BASE_PATH,

  plugins: [
    markdownSchema(),
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Custom view for Posts
            S.listItem()
              .title('Blog Posts')
              .child(
                S.documentTypeList('post')
                  .title('Blog Posts')
                  .child((documentId) =>
                    S.document()
                      .documentId(documentId)
                      .schemaType('post')
                      .views([
                        S.view.form(),
                        S.view.component(SocialPreview).title('Social Preview'),
                      ])
                  )
              ),
            // Filter out 'post' from the default list to avoid duplication
            ...S.documentTypeListItems().filter(
              (listItem) => !['post'].includes(listItem.getId())
            ),
          ]),
    }),
    documentInternationalization({
      supportedLanguages: [
        { id: 'en', title: 'English' },
        { id: 'ca', title: 'Catalan' },
      ],
      schemaTypes: ['post', 'siteSettings'],
    }),
  ],

  schema: {
    types: [post, siteSettings, category],
  },
})
