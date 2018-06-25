import { WebAuth } from 'auth0-js';

export const auth = new WebAuth({
  domain: process.env.REACT_APP_AUTH0_DOMAIN || '',
  clientID: process.env.REACT_APP_AUTH0_CLIENT_ID || '',
  redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL || '',
  audience: process.env.REACT_APP_AUDIENCE || '',
  responseType: 'token id_token',
  scope: 'openid'
});
