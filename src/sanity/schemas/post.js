import AIInput from '../components/AIInput'
import ExternalLink from '../components/ExternalLink'

export const post = {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      name: 'social',
      title: 'Social & Distribution',
    },
  ],
  fields: [
    {
      name: 'previewLink',
      title: 'Quick Links',
      type: 'string',
      group: 'content',
      components: { input: ExternalLink },
    },
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      group: 'content',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Catalan', value: 'ca' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      validation: (Rule) => Rule.required(),
      components: { input: AIInput },
    },
    {
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      group: 'content',
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
      group: 'content',
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
      group: 'content',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      group: 'content',
      rows: 3,
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'markdown',
      group: 'content',
      description: 'The article content in Markdown format.',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      group: 'content',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      group: 'content',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    // --- Social & Distribution Group ---
    {
      name: 'socialSummary',
      title: 'Social Summary',
      type: 'text',
      group: 'social',
      rows: 3,
      components: { input: AIInput },
      description: 'A punchy version of the excerpt for social media previews.',
    },
    {
      name: 'keyIdeas',
      title: 'Key Ideas',
      type: 'array',
      group: 'social',
      of: [{ type: 'string' }],
      description: '3-5 core takeaways or interesting quotes.',
    },
    {
      name: 'twitterSnippet',
      title: 'X / Twitter Snippet',
      type: 'text',
      group: 'social',
      rows: 2,
      components: { input: AIInput },
      validation: (Rule) => Rule.max(280),
      description: 'Short, engaging text for a tweet.',
    },
    {
      name: 'linkedinPost',
      title: 'LinkedIn Version',
      type: 'text',
      group: 'social',
      components: { input: AIInput },
      description: 'Professional summary or breakdown for LinkedIn.',
    },
    {
      name: 'facebookPost',
      title: 'Facebook Version',
      type: 'text',
      group: 'social',
      components: { input: AIInput },
      description: 'Casual, human-centered version of the post.',
    },
    {
      name: 'distributionNotes',
      title: 'Distribution Notes',
      type: 'text',
      group: 'social',
      description: 'Instructions or ideas for other platforms (Tumblr, Behance, etc.).',
    },
    {
      name: 'sources',
      title: 'Sources',
      type: 'array',
      group: 'content',
      of: [{ type: 'string' }],
      description: 'Links or references used for research.',
    },
    {
      name: 'imagePrompt',
      title: 'Image Prompt',
      type: 'text',
      group: 'content',
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
