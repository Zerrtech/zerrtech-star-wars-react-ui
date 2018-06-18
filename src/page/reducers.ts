import { ACTIONS } from "./actions";
import { Action } from "redux";

export const reducer = (state: string = ACTIONS.HERO_LIST, action: Action) =>
  action.type in ACTIONS ? action.type : state;
