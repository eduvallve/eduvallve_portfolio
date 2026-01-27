import React from 'react';
import renderHTMLContent from '../../utils/renderHTMLContent.js';

const TextBlock = ({ children, className = '', ...props }) => {
  return (
    <p className={`text-block ${className}`.trim()} {...props}>
      {renderHTMLContent(children)}
    </p>
  );
};

export default TextBlock;
