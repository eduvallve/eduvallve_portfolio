require('dotenv').config();
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

async function listModels() {
  const url = 'https://openrouter.ai/api/v1/models';
  const response = await fetch(url);
  const data = await response.json();
  const freeModels = data.data.filter(m => m.id.includes(':free') || (m.pricing && m.pricing.prompt === '0'));
  console.log(freeModels.map(m => m.id));
}

listModels();
