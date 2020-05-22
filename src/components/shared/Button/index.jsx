import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Button.scss';

const Button = ({
  children, inverted, isGoogleSignIn, ...props
}) => (
  <button
    type="button"
    className={cx('button', {
      'google-sign-in': isGoogleSignIn,
      'inverted': inverted,
    })}
    {...props}
  >
    {children}
  </button>
);

Button.defaultProps = {
  inverted: false,
  isGoogleSignIn: false,
  children: '',
};

Button.propTypes = {
  inverted: PropTypes.bool,
  isGoogleSignIn: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Button;
