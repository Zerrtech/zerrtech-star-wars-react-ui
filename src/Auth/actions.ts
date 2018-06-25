import { FluxStandardAction } from "flux-standard-action";
import { IAuth0 } from "../models";

type Payload = any;
export type AuthAPIAction = FluxStandardAction<Payload, {}>;

export const ACTIONS = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  LOGIN_CALLBACK: 'LOGIN_CALLBACK',
  REQUEST_LOGIN_CALLBACK: 'REQUEST_LOGIN_CALLBACK',
};

/*
 * action creators
 */
export function login(): AuthAPIAction {
  return {
    type: ACTIONS.LOGIN,
    payload: undefined,
    meta: {}
  };
}
export function logout(): AuthAPIAction {
  return {
    type: ACTIONS.LOGOUT,
    payload: undefined,
    meta: {}
  };
}
export function loginCallback(callback: IAuth0): AuthAPIAction {
  return {
    type: ACTIONS.LOGIN_CALLBACK,
    payload: callback,
    meta: {}
  };
}
export function requestLoginCallback(): AuthAPIAction {
  return {
    type: ACTIONS.REQUEST_LOGIN_CALLBACK,
    payload: undefined,
    meta: {}
  };
}
