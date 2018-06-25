import { ACTIONS } from "./page";

export const routesMap = {
  [ACTIONS.HERO_LIST]: "/",
  [ACTIONS.HERO_DETAIL]: "/hero/:id",
  [ACTIONS.AUTH0_CALLBACK]: "/callback",
};
