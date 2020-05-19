import React, { useState } from 'react';

import './SignIn.scss';

import FormInput from 'components/shared/FormInput';
import Button from 'components/shared/Button';

import { signInWithGoogle } from 'firebase/firebase.utils';

const SignIn = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className='sign-in'>
      <h2 className='title'>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          value={formData.email}
          type="email"
          label="email"
          handleChange={handleChange}
          required
        />
        <FormInput 
          name="password"
          value={formData.password}
          type="password"
          label="password"
          handleChange={handleChange}
          required
        />
        <div className='buttons'>
          <Button type="submit">Sign In</Button>
          <Button isGoogleSignIn onClick={signInWithGoogle}>Sign In with Google</Button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
