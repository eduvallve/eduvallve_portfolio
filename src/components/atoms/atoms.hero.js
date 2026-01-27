import React from 'react';
import renderHTMLContent from '../../utils/renderHTMLContent.js';

const Hero = ({ children, className = '', ...props }) => {
  return (
    <section className={`hero ${className}`.trim()} {...props}>
      {renderHTMLContent(children)}
    </section>
  );
};

export default Hero;
