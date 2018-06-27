import {
  IAuth0,
} from '../models';
import { Auth0UserProfile } from '../../node_modules/@types/auth0-js';

export interface IAuthState {
  auth: IAuth0,
  user: Auth0UserProfile | null,
}
