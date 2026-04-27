export const post = {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      description: 'The large image used in the article head.',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility.',
          validation: (Rule) => Rule.required(),
        }
      ]
    },
    {
      name: 'thumbnailImage',
      title: 'Thumbnail image',
      type: 'image',
      description: 'The image used in the blog list cards.',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility.',
          validation: (Rule) => Rule.required(),
        }
      ]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text',
      description: 'The article content in Markdown format.',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'sources',
      title: 'Sources',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Links or references used for research.',
    },
    {
      name: 'imagePrompt',
      title: 'Image Prompt',
      type: 'text',
      description: 'Suggested AI prompt for generating hero/thumbnail images.',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnailImage',
    },
  },
}
