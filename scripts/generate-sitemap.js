const fs = require('fs');
const path = require('path');

const BASE_URL = "https://eduvallve.com";
const OUTPUT_FILE = path.resolve(__dirname, '../public/sitemap.xml');
const PORTFOLIO_FILE = path.resolve(__dirname, '../src/static/json/portfolioList.js');

const routes = [
    "/",
    "/privacy",
    "/tree",
];

const getProjectSlugs = () => {
    try {
        const content = fs.readFileSync(PORTFOLIO_FILE, 'utf8');
        const lines = content.split('\n');
        const slugs = [];

        // Regex to find: slug: "some-value"
        const slugRegex = /slug:\s*["']([^"']+)["']/;

        lines.forEach(line => {
            const trimmedLine = line.trim();
            // Ignore single-line comments
            if (trimmedLine.startsWith('//')) return;

            const match = trimmedLine.match(slugRegex);
            if (match) {
                slugs.push(match[1]);
            }
        });

        console.log(`Found ${slugs.length} projects.`);
        return slugs;
    } catch (err) {
        console.error("Error reading portfolio list:", err);
        return [];
    }
};

const generateSitemap = () => {
    const projectSlugs = getProjectSlugs();

    const allRoutes = [
        ...routes,
        ...projectSlugs.map(slug => `/portfolio/${slug}`)
    ];

    const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(url => `  <url>
    <loc>${BASE_URL}${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url === "/" ? "1.0" : "0.8"}</priority>
  </url>`).join("\n")}
  <url>
    <loc>https://edurl.vercel.app</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

    fs.writeFileSync(OUTPUT_FILE, sitemapIndex);
    console.log(`Sitemap generated at ${OUTPUT_FILE}`);
};

generateSitemap();
