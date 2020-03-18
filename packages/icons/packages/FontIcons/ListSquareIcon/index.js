import * as React from 'react';
import PropTypes from 'prop-types';

const ListSquareIcon = ({ className, size, color }) => (
  <svg
    data-testid="ListSquareIcon"
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
    <title>shopping-list-square</title>
    <path d="M19.286 9.321h-12.609c-0.566 0-1.024-0.458-1.024-1.024s0.458-1.024 1.024-1.024v0h12.608c0.566 0 1.024 0.458 1.024 1.024s-0.458 1.024-1.024 1.024v0zM19.286 17.087h-12.609c-0.566 0-1.024-0.458-1.024-1.024s0.458-1.024 1.024-1.024v0h12.608c0.566 0 1.024 0.458 1.024 1.024s-0.458 1.024-1.024 1.024v0zM19.286 24.851h-12.609c-0.566 0-1.024-0.458-1.024-1.024s0.458-1.024 1.024-1.024v0h12.608c0.566 0 1.024 0.458 1.024 1.024s-0.458 1.024-1.024 1.024v0zM24.576 9.321h-0.069c-0.566 0-1.024-0.458-1.024-1.024s0.458-1.024 1.024-1.024v0h0.069c0.566 0 1.024 0.458 1.024 1.024s-0.458 1.024-1.024 1.024v0zM24.576 17.087h-0.069c-0.566 0-1.024-0.458-1.024-1.024s0.458-1.024 1.024-1.024v0h0.069c0.566 0 1.024 0.458 1.024 1.024s-0.458 1.024-1.024 1.024v0zM24.576 24.851h-0.069c-0.566 0-1.024-0.458-1.024-1.024s0.458-1.024 1.024-1.024v0h0.069c0.566 0 1.024 0.458 1.024 1.024s-0.458 1.024-1.024 1.024v0zM30.108 31.032h-28.288c-0.566 0-1.024-0.458-1.024-1.024v0-27.761c0-0.566 0.458-1.024 1.024-1.024v0h28.288c0.566 0 1.024 0.458 1.024 1.024v0 27.761c0 0.566-0.458 1.024-1.024 1.024v0zM2.844 28.984h26.24v-25.713h-26.24z" />{' '}
  </svg>
);

ListSquareIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

ListSquareIcon.defaultProps = {
  size: 1.5,
  color: '#000000',
};

export default ListSquareIcon;
