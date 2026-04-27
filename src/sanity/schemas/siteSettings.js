export default {
  name: 'siteSettings',
  title: 'Site Settings & translations',
  type: 'document',
  fields: [
    {
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'homeHeroTitle',
      title: 'Home Hero Title',
      type: 'string',
      description: "Example: Hello, I'm Eduard Vallve"
    },
    {
      name: 'homeHeroRole',
      title: 'Home Hero Role Prefix',
      type: 'string',
      description: "Example: a frontend"
    },
    {
      name: 'homeHeroBriefTitle',
      title: 'Home Hero Brief Title',
      type: 'string',
      description: "Example: Briefly about me"
    },
    {
      name: 'homeHeroSubtitle',
      title: 'Home Hero Subtitle',
      type: 'string',
      description: "Example: Front-end first, but with a full-stack view."
    },
    {
      name: 'aboutMe',
      title: 'About Me Bio',
      type: 'text',
      description: "The main bio text in the hero section."
    },
    {
      name: 'stackLabel',
      title: 'Stack Label',
      type: 'string',
      description: "Example: Stack:"
    },
    {
      name: 'stackList',
      title: 'Stack List',
      type: 'string',
      description: "Full list of technologies."
    },
    {
        name: 'portfolioTitle',
        title: 'Portfolio Section Title',
        type: 'string',
        description: "Example: Latest Projects"
    },
    {
        name: 'blogTitle',
        title: 'Blog Page Title',
        type: 'string',
        description: "Example: Blog"
    },
    {
        name: 'blogSubtitle',
        title: 'Blog Page Subtitle',
        type: 'string',
        description: "Thoughts, tutorials and news about web development and design."
    },
    {
      name: 'followMeTitle',
      title: 'Follow Me Banner Title',
      type: 'string'
    },
    {
      name: 'followMeText',
      title: 'Follow Me Banner Text',
      type: 'text'
    },
    {
      name: 'footerText',
      title: 'Footer Copyright Text',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'homeHeroTitle',
      lang: 'language'
    },
    prepare({ title, lang }) {
      return {
        title: title || 'Settings',
        subtitle: lang ? `Language: ${lang.toUpperCase()}` : 'No language set'
      }
    }
  }
}
