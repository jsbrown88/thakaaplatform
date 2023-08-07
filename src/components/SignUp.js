import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignUp = () => {
  const { loginWithRedirect } = useAuth0();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we would usually send the user data to the server
    // For this example, we'll just log them in directly
    loginWithRedirect({
      appState: { targetUrl: '/' },
    });
  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;