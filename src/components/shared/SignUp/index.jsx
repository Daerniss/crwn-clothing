import React, { useState } from 'react';

import { auth, createUserProfileDocument } from 'firebase/firebase.utils';

import FormInput from 'components/shared/FormInput';
import Button from 'components/shared/Button';

import './SignUp.scss';

const SignUp = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      displayName, email, password, confirmPassword,
    } = formData;

    if (password !== confirmPassword) {
      alert('passwords don\'t match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      setFormData({});
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do now have an account</h2>
      <span>Sign up with your email and password</span>

      <form className="sign-up__form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={formData.displayName}
          label="Display Name"
          handleChange={handleChange}
          required
        />
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
        <FormInput
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          label="Confirm Password"
          handleChange={handleChange}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
