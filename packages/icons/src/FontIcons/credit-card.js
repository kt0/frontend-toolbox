import React from 'react';
import PropTypes from 'prop-types';

const IconName = ({ className, size }) => (
  <svg
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
  >
    <title>credit-card</title>
    <path d="M29 4h-26c-1.65 0-3 1.35-3 3v18c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-18c0-1.65-1.35-3-3-3zM3 6h26c0.542 0 1 0.458 1 1v3h-28v-3c0-0.542 0.458-1 1-1zM29 26h-26c-0.542 0-1-0.458-1-1v-9h28v9c0 0.542-0.458 1-1 1zM4 20h2v4h-2zM8 20h2v4h-2zM12 20h2v4h-2z" />
    {' '}
  </svg>
);

IconName.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IconName.defaultProps = {
  size: 1.5,
};

export default IconName;