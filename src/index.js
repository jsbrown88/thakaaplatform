
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth0Provider
        domain="your-auth0-domain"
        clientId="your-auth0-client-id"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);