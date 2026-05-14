const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const { getBulkSocialInstructions } = require('../src/utils/socialPrompts');

// Configuration from environment variables
const OPENROUTER_API_KEY = process.env.REACT_APP_OPENROUTER_API_KEY || process.env.OPENROUTER_API_KEY;
const SANITY_AUTH_TOKEN = process.env.SANITY_AUTH_TOKEN;

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const SANITY_PROJECT_ID = 'ekv3t3dq';
const SANITY_DATASET = 'production';

const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  useCdn: false,
  token: SANITY_AUTH_TOKEN,
  apiVersion: '2024-03-24',
});

const TOPICS_PATH = path.join(__dirname, '../src/static/json/blog/blogCreationTopics.json');

// Test connection
async function testSanity() {
  try {
    const projects = await sanityClient.fetch('*[_type == "post"][0...1]');
    console.log("✅ Connexió amb Sanity OK. Hem llegit", projects.length, "posts.");
  } catch (err) {
    console.error("❌ ERROR de connexió amb Sanity:", err.message);
    process.exit(1);
  }
}

async function callOpenRouter(prompt, retryCount = 0) {
  const url = `https://openrouter.ai/api/v1/chat/completions`;
  const model = 'openrouter/auto';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
      },
      body: JSON.stringify({
        messages: [{ role: 'user', content: prompt }],
        model: model,
        temperature: 0.7,
      }),
      signal: AbortSignal.timeout(60000)
    });

    const data = await response.json();
    if (data.error) {
      if (data.error.code === 429 && retryCount < 3) {
        await new Promise(r => setTimeout(r, 10000));
        return await callOpenRouter(prompt, retryCount + 1);
      }
      throw new Error(`OpenRouter API Error: ${data.error.message}`);
    }
    return data.choices[0].message.content;
  } catch (error) {
    if (error.name === 'AbortError' && retryCount < 3) {
      await new Promise(r => setTimeout(r, 5000));
      return await callOpenRouter(prompt, retryCount + 1);
    }
    throw error;
  }
}

async function generateArticle(topic, language = 'en') {
  const langName = language === 'ca' ? 'Catalan' : 'English';
  const randomWordAmount = Math.floor(Math.random() * 100) + 350; // between 350 and 450 words
  const prompt = `
    Write a ${randomWordAmount}-word blog article in ${langName} about: "${topic}".
    Format the output as a JSON object with: 
    "title", "slug", "excerpt", "body", "sources", "imagePrompt", 
    "socialSummary", "twitterSnippet", "linkedinPost", "facebookPost".
    
    IMPORTANT SOCIAL MEDIA GUIDELINES:
    ${getBulkSocialInstructions(langName)}
    
    IMPORTANT: The "slug" should be short, SEO-friendly, and contain only the main keywords (max 4-5 words).
    IMPORTANT: The "body" must be in raw Markdown.
    Return ONLY the JSON string.
  `;

  const result = await callOpenRouter(prompt);
  const cleanResult = result.replace(/```json|```/g, '').trim();
  return JSON.parse(cleanResult);
}

async function translateArticle(article, toLanguage = 'ca') {
  const langName = toLanguage === 'ca' ? 'Catalan' : 'English';
  const prompt = `
    Translate the following blog article content to ${langName}. 
    Keep the same JSON structure.
    Content to translate: ${JSON.stringify(article)}
    Return ONLY the JSON string.
  `;

  const result = await callOpenRouter(prompt);
  const cleanResult = result.replace(/```json|```/g, '').trim();
  return JSON.parse(cleanResult);
}

function generateSlug(title) {
  return title.toLowerCase()
    .normalize('NFD') // Descompon caràcters (p. ex: ü -> u + ¨)
    .replace(/[\u0300-\u036f]/g, '') // Elimina els diacrítics
    .replace(/[^\w\s-]/g, '') // Elimina la resta de caràcters no-ASCII
    .replace(/\s+/g, '-')
    .slice(0, 96);
}

async function run() {
  try {
    await testSanity();
    console.log("Reading topics...");
    const fileContent = fs.readFileSync(TOPICS_PATH, 'utf-8');
    const { topics } = JSON.parse(fileContent);
    const topic = topics[Math.floor(Math.random() * topics.length)];

    console.log(`Step 1: Generating English article for topic: ${topic}`);
    const enArticle = await generateArticle(topic, 'en');

    console.log("Step 2: Translating to Catalan...");
    const caArticle = await translateArticle(enArticle, 'ca');

    // Create unique IDs for both
    const baseId = Math.random().toString(36).substring(7);
    const enId = `drafts.en-${baseId}`;
    const caId = `drafts.ca-${baseId}`;

    console.log("Step 3: Creating Sanity documents...");

    const enDoc = {
      _type: 'post',
      _id: enId,
      title: enArticle.title,
      language: 'en',
      slug: { _type: 'slug', current: generateSlug(enArticle.slug || enArticle.title) },
      publishedAt: new Date().toISOString(),
      excerpt: enArticle.excerpt?.substring(0, 195),
      body: enArticle.body,
      tags: [topic],
      imagePrompt: enArticle.imagePrompt,
      // Social fields
      socialSummary: enArticle.socialSummary,
      twitterSnippet: enArticle.twitterSnippet,
      linkedinPost: enArticle.linkedinPost,
      facebookPost: enArticle.facebookPost
    };

    const caDoc = {
      _type: 'post',
      _id: caId,
      title: caArticle.title,
      language: 'ca',
      slug: { _type: 'slug', current: generateSlug(caArticle.slug || caArticle.title) },
      publishedAt: new Date().toISOString(),
      excerpt: caArticle.excerpt?.substring(0, 195),
      body: caArticle.body,
      tags: [topic],
      imagePrompt: enArticle.imagePrompt,
      // Social fields
      socialSummary: caArticle.socialSummary,
      twitterSnippet: caArticle.twitterSnippet,
      linkedinPost: caArticle.linkedinPost,
      facebookPost: caArticle.facebookPost
    };

    const createdEn = await sanityClient.createOrReplace(enDoc);
    const createdCa = await sanityClient.createOrReplace(caDoc);

    console.log("Step 4: Linking translations...");
    const metadataId = `translation.metadata.${baseId}`;
    const metadataDoc = {
      _type: 'translation.metadata',
      _id: metadataId,
      translations: [
        { _key: 'en', value: { _type: 'reference', _ref: createdEn._id.replace('drafts.', ''), _weak: true } },
        { _key: 'ca', value: { _type: 'reference', _ref: createdCa._id.replace('drafts.', ''), _weak: true } }
      ]
    };
    await sanityClient.createOrReplace(metadataDoc);

    console.log(`Success! Drafts created: ${enId} and ${caId}`);

  } catch (error) {
    console.error("Automation failed:", error);
  }
}

run();
