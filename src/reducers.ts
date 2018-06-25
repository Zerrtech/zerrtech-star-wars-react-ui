import { heroReducer } from "./HeroListContainer";
import { heroDetailReducer } from "./HeroDetailContainer";
import { authReducer } from './Auth';

export const reducers = {
  heroes: heroReducer,
  heroDetail: heroDetailReducer,
  auth: authReducer,
};
