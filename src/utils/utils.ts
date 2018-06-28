import { IAppState, IAuth0 } from '../models';
import { auth } from '../Auth';
import { Auth0UserProfile } from '../../node_modules/@types/auth0-js';

export function selectAccessToken(state: IAppState) {
  if (state.auth.auth !== undefined) {
    return state.auth.auth.access_token;
  } else {
    return undefined;
  }
}
export function selectAuth(state: IAppState) {
  if (state.auth.auth !== undefined) {
    return state.auth.auth;
  } else {
    return undefined;
  }
}

export function checkLoggedIn(currentAuth: IAuth0) {
  if (currentAuth.expires_at === null) {
    return false;
  } else {
    const expiresAt = JSON.parse(currentAuth.expires_at);
    return new Date().getTime() < expiresAt;
  }
}

export function convertHashToLoginCallback(): Promise<IAuth0> {
  return new Promise((resolve, reject) => {
    auth.parseHash((err, authResult) => {
      const {
        expiresIn = 0,
        idToken = '',
        accessToken = '',
      } = authResult;

      const expiresAt = JSON.stringify((expiresIn * 1000) + new Date().getTime());

      resolve({
        expires_at: expiresAt,
        id_token: idToken || null,
        access_token: accessToken || null,
      });
    })
  })
}

export function getUserFromAuth(accessToken: string | null): Promise<Auth0UserProfile> {
  return new Promise((resolve, reject) => {
    if (accessToken === null) {
      reject('utils::getUserFromAuth was passed a null access token');
    } else {
      auth.client.userInfo(accessToken, (userErr, user) => {
        if (userErr !== null) {
          reject(userErr);
        } else {
          resolve(user);
        }
      })
    }
  })
}

export const API_URL = process.env['REACT_APP_API_URL'] || '';
export const STATIC_URL = process.env['REACT_APP_STATIC_URL'] || '';

