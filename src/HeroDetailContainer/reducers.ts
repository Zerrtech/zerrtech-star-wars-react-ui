import { NOT_FOUND } from "redux-first-router";
import { ACTIONS } from "../page/";

export const reducer = (state: any = null, action: any) => {
  switch (action.type) {
    case NOT_FOUND:
      return null;
    case ACTIONS.HERO_DETAIL:
      return action.payload;
    default:
      return state;
  }
};
