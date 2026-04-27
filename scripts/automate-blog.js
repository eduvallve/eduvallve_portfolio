const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Configuration from environment variables
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const SANITY_AUTH_TOKEN = process.env.SANITY_AUTH_TOKEN;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const SANITY_PROJECT_ID = 'ekv3t3dq';
const SANITY_DATASET = 'production';

// URLs for different environments
const VERCEL_URL = 'https://eduvallve.com';
const GITHUB_PAGES_URL = 'https://eduvallve.github.io/eduvallve_portfolio';
const SANITY_STUDIO_URL = `${VERCEL_URL}/admin/structure/post`;

// Path to topics
const TOPICS_PATH = path.join(__dirname, '../src/static/json/blog/blogCreationTopics.json');

const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  useCdn: false,
  token: SANITY_AUTH_TOKEN,
  apiVersion: '2024-03-24',
});

async function getUsedTopics() {
  const query = `*[_type == "post"] { "tags": tags }`;
  const posts = await sanityClient.fetch(query);
  const usedTags = new Set();
  posts.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => usedTags.add(tag.toLowerCase()));
    }
  });
  return usedTags;
}

async function selectTopic() {
  const fileContent = fs.readFileSync(TOPICS_PATH, 'utf-8');
  const { topics } = JSON.parse(fileContent);
  const usedTopics = await getUsedTopics();

  const availableTopics = topics.filter(topic => !usedTopics.has(topic.toLowerCase()));

  if (availableTopics.length > 0) {
    return availableTopics[Math.floor(Math.random() * availableTopics.length)];
  }

  console.log("No more topics in the list. Asking AI for a new one...");
  return await generateNewTopic();
}

async function generateNewTopic() {
  const prompt = "Generate a single, compelling blog post topic for a web developer portfolio. The topic should be about modern web development (React, Node, CSS, accessibility, etc.). Return only the topic string, nothing else.";
  const result = await callOpenRouter(prompt);
  return result.trim();
}

async function callOpenRouter(prompt, retryCount = 0) {
  const url = `https://openrouter.ai/api/v1/chat/completions`;

  // Model logic: using Gemma 3 27B which is often less saturated
  const model = 'google/gemma-3-27b-it:free';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'https://github.com/eduvallve/eduvallve_portfolio',
        'X-Title': 'Portfolio Blog Automation'
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
        console.log(`Rate limited. Retrying in 10s... (Attempt ${retryCount + 1}/3)`);
        await new Promise(r => setTimeout(r, 10000));
        return await callOpenRouter(prompt, retryCount + 1);
      }
      console.error("OpenRouter Error Details:", data.error);
      throw new Error(`OpenRouter API Error: ${data.error.message || JSON.stringify(data.error)}`);
    }
    return data.choices[0].message.content;
  } catch (error) {
    if (error.name === 'AbortError' && retryCount < 3) {
      console.log(`Timeout. Retrying in 5s... (Attempt ${retryCount + 1}/3)`);
      await new Promise(r => setTimeout(r, 5000));
      return await callOpenRouter(prompt, retryCount + 1);
    }
    throw error;
  }
}

async function generateArticle(topic) {
  const prompt = `
    Write a 300-word blog article in English about the following topic: "${topic}".
    Format the output as a valid JSON object with: "title", "excerpt", "body", "sources", "imagePrompt".
    Return ONLY the JSON string.
  `;

  const result = await callOpenRouter(prompt);
  try {
    const cleanResult = result.replace(/```json|```/g, '').trim();
    return JSON.parse(cleanResult);
  } catch (e) {
    console.error("Failed to parse AI response as JSON. Raw response:", result);
    throw e;
  }
}

async function createSanityDraft(article, topic) {
  const doc = {
    _type: 'post',
    _id: 'drafts.' + Math.random().toString(36).substring(7),
    title: article.title,
    slug: {
      _type: 'slug',
      current: article.title.toLowerCase().replace(/\s+/g, '-').slice(0, 96)
    },
    publishedAt: new Date().toISOString(),
    excerpt: article.excerpt,
    body: article.body, // Send raw markdown string
    tags: [topic],
    sources: article.sources,
    imagePrompt: article.imagePrompt
  };

  return await sanityClient.create(doc);
}

async function sendTelegramNotification(article, doc) {
  const message = `
🚀 *New Blog Draft Created!*

*Title:* ${article.title}
*Topic:* ${article.tags ? article.tags[0] : 'General'}
*Status:* Draft (Review required)

*Review links:*
- [Sanity Studio (Direct)](${SANITY_STUDIO_URL})
- [Production (Vercel)](${VERCEL_URL}/admin)
- [Staging (GitHub Pages)](${GITHUB_PAGES_URL}/admin)
  `;

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
      })
    });
    const data = await response.json();
    if (!data.ok) {
      console.error("Telegram API Error:", data.description);
    }
  } catch (e) {
    console.error("Telegram error:", e.message);
  }
}

async function run() {
  try {
    console.log("Starting automated blog generation...");
    const topic = await selectTopic();
    console.log(`Selected Topic: ${topic}`);

    const article = await generateArticle(topic);
    console.log("Article generated successfully.");

    const doc = await createSanityDraft(article, topic);
    console.log(`Draft created in Sanity with ID: ${doc._id}`);

    await sendTelegramNotification(article, doc);
    console.log("Telegram notification sent.");
  } catch (error) {
    console.error("Error in automation workflow:", error);
    process.exit(1);
  }
}

run();
