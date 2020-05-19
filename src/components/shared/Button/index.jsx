import React from 'react';
import cx from 'classnames';

import './Button.scss';

const Button = ({ children, isGoogleSignIn, ...props }) => {
  return (
    <button
    className={cx('button', {
      'google-sign-in': isGoogleSignIn,
    })}
     {...props}>
      {children}
    </button>
  )
}

export default Button;
