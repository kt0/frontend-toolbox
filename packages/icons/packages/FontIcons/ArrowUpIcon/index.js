import * as React from 'react';
import PropTypes from 'prop-types';

const IconName = ({ className, size , color}) => (
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
    <title>arrow-up</title>
    <path d="M27.414 12.586l-10-10c-0.781-0.781-2.047-0.781-2.828 0l-10 10c-0.781 0.781-0.781 2.047 0 2.828s2.047 0.781 2.828 0l6.586-6.586v19.172c0 1.105 0.895 2 2 2s2-0.895 2-2v-19.172l6.586 6.586c0.39 0.39 0.902 0.586 1.414 0.586s1.024-0.195 1.414-0.586c0.781-0.781 0.781-2.047 0-2.828z" />
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
