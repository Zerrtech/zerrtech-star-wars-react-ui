import { HeroAPIAction, ACTIONS } from "./actions";
import { IHeroList } from "../models";

interface IHeroSquadList extends IHeroList {
  squad: number[];
}

const INITIAL_STATE: IHeroSquadList = {
  heroes: [],
  loading: false,
  error: null,
  squad: [],
};

export const reducer = (
  state: IHeroSquadList = INITIAL_STATE,
  action: HeroAPIAction,
): IHeroSquadList => {
  switch (action.type) {
    case ACTIONS.LOAD_STARTED:
      return {
        ...state,
        heroes: [],
        loading: true,
        error: null,
      };
    case ACTIONS.LOAD_SUCCEEDED:
      return {
        ...state,
        heroes: action.payload === undefined ? [] : action.payload,
        loading: false,
        error: null,
      };
    case ACTIONS.LOAD_FAILED:
      return {
        ...state,
        heroes: [],
        loading: false,
        error: action.error,
      };
    case ACTIONS.UPDATE_HERO:
      return state;
    default:
      return state;
  }
};
