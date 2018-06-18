import { HeroAPIAction, ACTIONS } from "./actions";
import { IHeroList } from "../models";

const INITIAL_STATE: IHeroList = {
  heroes: [],
  loading: false,
  error: null
};

export const heroReducer = (
  state: IHeroList = INITIAL_STATE,
  action: HeroAPIAction
): IHeroList => {
  switch (action.type) {
    case ACTIONS.LOAD_STARTED:
      return {
        ...state,
        heroes: [],
        loading: true,
        error: null
      };
    case ACTIONS.LOAD_SUCCEEDED:
      return {
        ...state,
        heroes: action.payload === undefined ? [] : action.payload,
        loading: false,
        error: null
      };
    case ACTIONS.LOAD_FAILED:
      return {
        ...state,
        heroes: [],
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};
