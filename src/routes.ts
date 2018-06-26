import { ACTIONS } from "./page";

export const routesMap = {
  [ACTIONS.HERO_LIST]: "/:idList*",
  [ACTIONS.HERO_DETAIL]: "/hero/:id",
};
