import React from 'react';

const IframeBlock = ({ src, title = 'iframe', className = '', width = '100%', height = '100%', styles, ...props }) => (
  <div className={`iframe-block ${className}`.trim()} {...props}>
    <iframe src={src} title={title} style={{ width, height, border: 'none', ...styles }} />
  </div>
);

export default IframeBlock;
