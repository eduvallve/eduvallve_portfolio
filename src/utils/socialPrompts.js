/**
 * Social Media Prompt Configurations
 * Centralized source of truth for social media AI voice.
 */

const SOCIAL_CONFIG = {
  twitterSnippet: {
    name: 'Twitter/X',
    instructions: 'Informal, catchy tweet (max 240 chars for the text). Use emojis and the placeholder {{URL}}.',
    requirements: 'Must generate curiosity. Keep the text brief (max 240 chars) to leave room for the link.'
  },
  linkedinPost: {
    name: 'LinkedIn',
    instructions: 'Professional summary for LinkedIn highlighting a key insight. End with a call to action and the link.',
    requirements: 'Reflection-oriented, professional tone. YOU MUST include the placeholder {{URL}} at the end of the post.'
  },
  facebookPost: {
    name: 'Facebook',
    instructions: 'Human-centered, engaging story-telling style version for Facebook.',
    requirements: 'Friendly tone, inviting to visit the blog, include link.'
  },
  socialSummary: {
    name: 'Teaser',
    instructions: 'A punchy, direct teaser version for general social sharing (Meta Description).',
    requirements: 'Short and powerful, max 160 characters, DO NOT include the link.'
  }
};

/**
 * Generates a prompt for a single field (used in AIInput.js)
 */
const getSocialPrompt = (platform, { title, postUrl, body, langName }) => {
  const config = SOCIAL_CONFIG[platform] || SOCIAL_CONFIG.socialSummary;
  const contentSnippet = body ? body.substring(0, 1200) : '';

  return `
    Ets un expert en social media i Copywriting. Escriu en ${langName}. 
    L'objectiu és crear un "reclam" (teaser) per a ${config.name} que convidi a llegir l'article "${title}".
    INSTRUCCIONS ESPECÍFIQUES: ${config.instructions}
    REQUISITS: ${config.requirements}
    ENLLAÇ: ${postUrl}
    CONTINGUT BASE: ${contentSnippet}
    
    Retorna nomes el text generat sense explicacions extra.
  `.trim();
};

/**
 * Generates bulk instructions for the automation script (used in automate-blog.js)
 */
const getBulkSocialInstructions = (langName = 'English') => {
  const details = Object.entries(SOCIAL_CONFIG)
    .map(([key, cfg]) => `- ${key}: ${cfg.instructions}`)
    .join('\n');

  return `
    For the social media fields, follow these specific instructions in ${langName}:
    ${details}
    
    IMPORTANT: Use the placeholder {{URL}} exactly where the link should go.
    Ensure all fields include appropriate emojis.
  `.trim();
};

module.exports = {
  getSocialPrompt,
  getBulkSocialInstructions
};
