import { reducer as heroes } from "./HeroListContainer";
import { reducer as heroDetail } from "./HeroDetailContainer";
import { reducer as squadList } from "./HeroListContainer/SquadList";

export const reducers = {
  heroes,
  heroDetail,
  squadList,
};
