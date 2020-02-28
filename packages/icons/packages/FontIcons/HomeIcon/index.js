import * as React from 'react';
import PropTypes from 'prop-types';

const IconName = ({ className, size, color }) => (
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
    fill={color}
  >
    <title>home</title>
    <path d="M27.014 30.354h-22.016c-0.566 0-1.024-0.458-1.024-1.024v0-11.41c0.001-0.306 0.137-0.58 0.351-0.767l0.001-0.001 10.592-9.216c0.179-0.156 0.414-0.251 0.672-0.251 0.244 0 0.469 0.086 0.645 0.228l-0.002-0.002 11.424 9.216c0.234 0.189 0.383 0.476 0.384 0.797v11.41c-0.003 0.563-0.46 1.019-1.024 1.019-0.001 0-0.002 0-0.003 0h0zM6.022 28.306h19.968v-9.896l-10.374-8.37-9.592 8.346zM20.157 29.386c-0.566 0-1.024-0.458-1.024-1.024v0-8.384h-6.461v8.384c0 0.566-0.458 1.024-1.024 1.024s-1.024-0.458-1.024-1.024v0-9.408c0-0.566 0.458-1.024 1.024-1.024v0h8.509c0.566 0 1.024 0.458 1.024 1.024v0 9.408c0 0.566-0.458 1.024-1.024 1.024v0zM28.288 13.824c-0.248-0-0.476-0.089-0.653-0.236l0.002 0.001-12.020-9.938-11.219 9.916c-0.18 0.159-0.418 0.257-0.678 0.257-0.566 0-1.025-0.459-1.025-1.025 0-0.305 0.133-0.579 0.345-0.767l0.001-0.001 11.872-10.496c0.18-0.159 0.417-0.256 0.678-0.256 0.249 0 0.477 0.089 0.654 0.236l-0.002-0.001 12.704 10.496c0.228 0.189 0.372 0.473 0.372 0.79 0 0.566-0.458 1.024-1.024 1.024-0.002 0-0.004 0-0.006-0h0z" />
    {' '}
  </svg>
);

IconName.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

IconName.defaultProps = {
  size: 1.5,
  color: '#000000',
};

export default IconName;
