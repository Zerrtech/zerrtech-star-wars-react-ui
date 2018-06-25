import { AuthAPIAction, ACTIONS } from "./actions";
import { IAuthState } from "./models";

export const INITIAL_STATE: IAuthState = {
  auth: {
    access_token: localStorage.getItem('access_token'),
    expires_at: localStorage.getItem('expires_at'),
    id_token: localStorage.getItem('id_token'),
  },
};

export const authReducer = (
  state: IAuthState = INITIAL_STATE,
  action: AuthAPIAction
): IAuthState => {
  switch (action.type) {
    case ACTIONS.LOGIN: {
      return state
    }
    case ACTIONS.LOGIN_CALLBACK: {
      const {
        access_token,
        id_token,
        expires_at,
      } = action.payload;

      localStorage.setItem('access_token', access_token);
      localStorage.setItem('id_token', id_token);
      localStorage.setItem('expires_at', expires_at);

      return {
        ...state,
        auth: {
          ...state.auth,
          access_token,
          id_token,
          expires_at,
        }
      };
    }
    case ACTIONS.REQUEST_LOGIN_CALLBACK: {
      return state;
    }
    case ACTIONS.LOGOUT: {
      localStorage.removeItem('access_token');
      localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');

      return {
        ...state,
        auth: {
          access_token: null,
          expires_at: null,
          id_token: null,
        }
      };
    }
    default:
      return state;
  }
};
