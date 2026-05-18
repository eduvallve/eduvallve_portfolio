import { useEffect } from 'react';

/**
 * SEO component to dynamically update document head meta tags.
 * Since this is a SPA, it uses a custom implementation to manage tags on the client side.
 */
const SEO = ({ title, description, image, url, type = 'article', lang = 'en' }) => {
  useEffect(() => {
    // 1. Update Document Title
    const baseTitle = 'Edu Vallvé | Creative Developer';
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;

    // 2. Helper function to update/create meta tags
    const updateMetaTag = (attr, value, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${attr}="${value}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Update Standard Meta Tags
    updateMetaTag('name', 'description', description);

    // 4. Update Open Graph (Facebook / LinkedIn)
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:image', image);
    updateMetaTag('property', 'og:url', url);
    updateMetaTag('property', 'og:type', type);
    updateMetaTag('property', 'og:locale', lang === 'ca' ? 'ca_ES' : 'en_US');

    // 5. Update Twitter Cards
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', image);

    // Clean up isn't strictly necessary for document tags in a simple SPA,
    // but we ensure they update correctly on every navigation.
  }, [title, description, image, url, type, lang]);

  return null; // This component doesn't render anything to the DOM
};

export default SEO;
