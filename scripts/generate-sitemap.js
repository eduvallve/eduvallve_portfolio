const fs = require('fs');
const path = require('path');
const { createClient } = require('@sanity/client');

const BASE_URL = "https://eduvallve.com";
const OUTPUT_FILE = path.resolve(__dirname, '../public/sitemap.xml');

const sanityClient = createClient({
  projectId: 'ekv3t3dq',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-03-24',
});

const languages = ['en', 'ca'];
const staticRoutes = ["", "privacy", "tree", "blog"];

// Fetch all blog posts with their slugs and languages
async function getBlogPosts() {
  const query = `*[_type == "post"] { "slug": slug.current, language }`;
  return await sanityClient.fetch(query);
}

const generateSitemap = async () => {
    const posts = await getBlogPosts();
    
    let urlEntries = "";

    // 1. Static Routes (Home, Privacy, etc.)
    staticRoutes.forEach(route => {
        languages.forEach(lang => {
            const loc = `${BASE_URL}/${lang}${route ? '/' + route : ''}`;
            urlEntries += `  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === "" ? "1.0" : "0.8"}</priority>
${languages.map(l => `    <xhtml:link rel="alternate" hreflang="${l}" href="${BASE_URL}/${l}${route ? '/' + route : ''}"/>`).join("\n")}
  </url>\n`;
        });
    });

    // 2. Blog Posts (Dynamic)
    posts.forEach(post => {
        const loc = `${BASE_URL}/${post.language}/blog/${post.slug}`;
        urlEntries += `  <url>
    <loc>${loc}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="${post.language}" href="${loc}"/>
  </url>\n`;
    });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}</urlset>`;

    fs.writeFileSync(OUTPUT_FILE, sitemap);
    console.log(`Sitemap generated with ${posts.length} blog posts in all languages.`);
};

generateSitemap().catch(console.error);
