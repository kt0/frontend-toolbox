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
    <title>envelope</title>
    <path d="M27.627 27.267c0.68 0 1.28-0.227 1.787-0.667l-8.613-8.613-0.6 0.427c-0.64 0.48-1.173 0.853-1.573 1.12s-0.933 0.533-1.6 0.8c-0.667 0.28-1.293 0.427-1.867 0.427h-0.027c-0.587 0-1.2-0.133-1.867-0.413s-1.2-0.547-1.6-0.813c-0.871-0.579-1.579-1.087-2.27-1.618l0.096 0.071-8.613 8.613c0.507 0.44 1.093 0.667 1.773 0.667zM1.667 12.573c-0.651-0.435-1.215-0.923-1.713-1.472l-0.007-0.008v13.107l7.6-7.6c-1.533-1.067-3.48-2.4-5.88-4.027zM28.653 12.573c-2.307 1.56-4.267 2.907-5.893 4.040l7.6 7.587v-13.107c-0.493 0.533-1.067 1.040-1.707 1.467zM27.627 3.387h-24.96c-0.88 0-1.547 0.293-2.013 0.88s-0.707 1.333-0.707 2.213c0 0.707 0.307 1.467 0.933 2.307 0.556 0.764 1.213 1.413 1.96 1.942l0.026 0.018 3.467 2.427 2.747 1.893 1.707 1.2 0.253 0.173c0.845 0.584 1.296 0.909 1.746 1.236l-0.359-0.249 0.88 0.547c0.347 0.2 0.667 0.36 0.973 0.453 0.253 0.095 0.545 0.153 0.85 0.16l0.003 0h0.027c0.267 0 0.547-0.053 0.853-0.16 0.307-0.093 0.627-0.253 0.973-0.453 0.864-0.499 1.605-1.005 2.304-1.562l-0.037 0.029 0.267-0.173 1.707-1.2 6.213-4.32c0.821-0.569 1.511-1.259 2.063-2.053l0.017-0.027c0.547-0.813 0.827-1.667 0.827-2.56 0-0.747-0.267-1.387-0.8-1.92s-1.173-0.8-1.92-0.8z" />
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