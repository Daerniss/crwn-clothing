import React from 'react';

import SignIn from 'components/shared/SignIn';
import SignUp from 'components/shared/SignUp';

import './Auth.scss';

const Auth = () => (
  <div className="auth">
    <SignIn />
    <SignUp />
  </div>
);

export default Auth;
