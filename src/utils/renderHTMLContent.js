import React from 'react';

// Simple utility that detects if a string contains any HTML tags.
// Uses a lightweight regex to avoid complex HTML parsing.
const containsHtml = (str) =>
  typeof str === 'string' && /<[^>]+>/.test(str);

/**
 * renderHTMLContent
 * - Safely renders either plain children or an HTML string.
 * - If `children` is already a React element, it is returned unchanged.
 * - If `children` is a string containing HTML, the function wraps it
 *   in the given `wrapper` element and injects it via
 *   `dangerouslySetInnerHTML`.
 * - If `children` is null/undefined, returns null.
 *
 * @param {any} children - content to render (string, React node, etc.)
 * @param {object} options - optional settings (e.g. { wrapper: 'div' })
 */
const renderHTMLContent = (children, options = {}) => {
  const { wrapper = 'span' } = options;

  // If this is already a React element (node), return it as-is.
  if (React.isValidElement(children)) return children;

  // Gracefully handle null/undefined input.
  if (children == null) return null;

  // If the content is a string that contains HTML tags, render it
  // using the specified wrapper and `dangerouslySetInnerHTML`.
  if (containsHtml(children)) {
    const Wrapper = wrapper;
    return <Wrapper dangerouslySetInnerHTML={{ __html: children }} />;
  }

  // Otherwise return the original children (likely plain text).
  return children;
};

export default renderHTMLContent;
