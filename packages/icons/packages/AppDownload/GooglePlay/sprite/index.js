/**
* THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
*/
import * as React from 'react';
import PropTypes from 'prop-types';

if(!process.env.SSR) {
  // eslint-disable-next-line global-require
  require('./GooglePlay.svg');
}

const GooglePlay = ({ className, size }) => 
  <svg 
    viewBox="185.5 -25.5 128 40"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor">
    <use xlinkHref={`/${process.env.PUBLIC_URL}/sprite.svg#GooglePlay`} />
  </svg>;

GooglePlay.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

GooglePlay.defaultProps = {
  size: 1.5,
};

export default GooglePlay;

