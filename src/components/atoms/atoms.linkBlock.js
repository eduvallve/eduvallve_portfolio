import React from 'react';
import { Link } from 'react-router-dom';
import renderHTMLContent from '../../utils/renderHTMLContent.js';

const LinkBlock = ({ children, className = '', path = '/', ...props }) => {
  return (
    <Link to={path} className={`link-block ${className}`.trim()} {...props}>
      {renderHTMLContent(children)}
    </Link>
  );
};

export default LinkBlock;
