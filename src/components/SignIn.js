import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignIn = () => {
  const { loginWithRedirect } = useAuth0();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setUserPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginWithRedirect({
      redirectUri: 'http://localhost:3000',
      appState: { targetUrl: '/userProfile' }
    });
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={userEmail} onChange={handleEmailChange} required />
        </label>
        <label>
          Password:
          <input type="password" value={userPassword} onChange={handlePasswordChange} required />
        </label>
        <input type="submit" value="Sign In" />
      </form>
    </div>
  );
};

export default SignIn;