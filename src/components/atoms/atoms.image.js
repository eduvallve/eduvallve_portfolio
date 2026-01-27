import React, { useState, useEffect } from 'react';

const Image = ({ className = '', src, alt = '', label = '', ...props }) => {
  const [svgContent, setSvgContent] = useState(null);
  const isSvg = src && src.includes('.svg');

  useEffect(() => {
    if (isSvg) {
      fetch(src)
        .then(response => response.text())
        .then(text => setSvgContent(text))
        .catch(error => console.error('Error loading SVG:', error));
    }
  }, [src, isSvg]);

  if (isSvg) {
    return svgContent ? (
      <figure
        className={`image image__svg ${className}`.trim()}
        dangerouslySetInnerHTML={{ __html: svgContent }}
        data-label={label}
        {...props}
      />
    ) : null; // Or a loading placeholder
  }

  return (
    <img className={`image ${className}`.trim()} src={src} alt={alt} {...props} />
  );
};

export default Image;
