import React, { useState } from 'react';

import { auth, signInWithGoogle } from 'firebase/firebase.utils';

import FormInput from 'components/shared/FormInput';
import Button from 'components/shared/Button';

import './SignIn.scss';

const SignIn = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setFormData({});
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={formData.email}
          label="Email"
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          value={formData.password}
          label="Password"
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <Button type="submit">Sign In</Button>
          <Button isGoogleSignIn onClick={signInWithGoogle}>Sign In with Google</Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
