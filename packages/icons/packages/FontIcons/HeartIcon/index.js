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
    width="38"
    height="32"
    viewBox="0 0 38 32"
    fill={color}
  >
    <title>heart</title>
    <path d="M34.705 3.148c-1.897-1.94-4.541-3.143-7.465-3.143-2.883 0-5.493 1.169-7.382 3.058l-1.019 1.019-1.019-1.019c-1.881-1.842-4.458-2.979-7.302-2.979-5.765 0-10.438 4.673-10.438 10.438 0 2.843 1.136 5.42 2.979 7.302l-0.002-0.002 13.047 13.047c0.7 0.699 1.666 1.131 2.734 1.131s2.034-0.432 2.734-1.131l12.965-12.963c1.915-1.908 3.101-4.548 3.101-7.465 0-2.833-1.118-5.405-2.937-7.299l0.003 0.004zM33.172 16.541l-12.965 12.956c-0.35 0.349-0.833 0.565-1.367 0.565s-1.017-0.216-1.367-0.565l-13.047-13.040c-1.54-1.54-2.492-3.666-2.492-6.016 0-4.698 3.809-8.507 8.507-8.507 2.349 0 4.476 0.952 6.016 2.492v0l1.019 1.019-1.562 1.562c-0.187 0.177-0.303 0.426-0.303 0.703 0 0.534 0.433 0.967 0.967 0.967 0.277 0 0.526-0.116 0.703-0.303l0-0 3.945-3.948c1.539-1.54 3.666-2.492 6.015-2.492 2.384 0 4.539 0.981 6.083 2.561l0.002 0.002c1.477 1.541 2.387 3.637 2.387 5.945 0 2.385-0.971 4.543-2.539 6.1l-0.001 0zM33.731 11.631c-0.226-3.534-2.656-6.445-5.92-7.385l-0.058-0.014c-0.086-0.024-0.185-0.037-0.287-0.037-0.621 0-1.125 0.503-1.125 1.125 0 0.509 0.338 0.938 0.801 1.077l0.008 0.002c2.411 0.694 4.174 2.806 4.337 5.354l0.001 0.018c0.038 0.59 0.526 1.054 1.122 1.054h0.071c0.589-0.040 1.051-0.527 1.051-1.122 0-0.025-0.001-0.050-0.002-0.074l0 0.003z" />
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
