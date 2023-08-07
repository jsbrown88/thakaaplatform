import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Authentication = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [authUser, setAuthUser] = useState(null);
  const [authToken, setAuthToken] = useState(null);

  const login = () => {
    loginWithRedirect();
  };

  const logoutUser = () => {
    logout({ returnTo: window.location.origin });
  };

  const authenticateUser = async () => {
    if (isAuthenticated) {
      setAuthUser(user);
      const token = await getAccessTokenSilently();
      setAuthToken(token);
    }
  };

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={login}>Log in</button>
      )}

      {isAuthenticated && (
        <button onClick={logoutUser}>Log out</button>
      )}
    </div>
  );
};

export default Authentication;
