import React from 'react';
import renderHTMLContent from '../../utils/renderHTMLContent.js';

const Container = ({ children, className = '', ...props }) => {
  return (
    <div className={`container ${className}`.trim()} {...props}>
      {renderHTMLContent(children)}
    </div>
  );
};

export default Container;
