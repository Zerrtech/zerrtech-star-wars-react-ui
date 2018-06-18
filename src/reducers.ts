import { heroReducer } from "./HeroListContainer";
import { heroDetailReducer } from "./HeroDetailContainer";

export const reducers = {
  heroes: heroReducer,
  heroDetail: heroDetailReducer
};
