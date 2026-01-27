import React from 'react';
import renderHTMLContent from '../../utils/renderHTMLContent.js';

const HeaderBlock = ({ children, className = '', label, ...props }) => {
  const renderedContent = renderHTMLContent(children);

  if (label === 'h1') return <h1 className={`${className}`.trim()} {...props}>{renderedContent}</h1>;
  if (label === 'h2') return <h2 className={`${className}`.trim()} {...props}>{renderedContent}</h2>;
  if (label === 'h3') return <h3 className={`${className}`.trim()} {...props}>{renderedContent}</h3>;
  if (label === 'h4') return <h4 className={`${className}`.trim()} {...props}>{renderedContent}</h4>;
  if (label === 'h5') return <h5 className={`${className}`.trim()} {...props}>{renderedContent}</h5>;
  if (label === 'h6') return <h6 className={`${className}`.trim()} {...props}>{renderedContent}</h6>;

  return <div className={`${className}`.trim()} {...props}>{renderedContent}</div>;
};

export default HeaderBlock;
