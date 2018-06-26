import { reducer as heroes } from "./HeroListContainer";
import { reducer as heroDetail } from "./HeroDetailContainer";
import { reducer as auth } from './Auth';

export const reducers = {
  heroes,
  heroDetail,
  auth,
};
