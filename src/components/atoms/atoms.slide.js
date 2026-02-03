import React from 'react';
import renderHTMLContent from '../../utils/renderHTMLContent.js';

const Slide = ({ children, className = '', ...props }) => {
  return (
    <div className={`carousel__slide ${className}`.trim()} {...props}>
      {renderHTMLContent(children)}
    </div>
  );
};

export default Slide;
