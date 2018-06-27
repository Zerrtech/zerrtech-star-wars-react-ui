import { get } from "lodash";
import { HeroAPIAction, ACTIONS } from "./actions";
import { IHeroList } from "../models";

const INITIAL_STATE: IHeroList = {
  heroes: [],
  loading: false,
  error: null,
};

export const reducer = (state = INITIAL_STATE, action: HeroAPIAction) => {
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
      if (action.payload === undefined) {
        return state;
      }
      const otherHeroes = state.heroes.filter(
        (hero) => hero.id !== get(action, ["payload", "id"]),
      );

      return {
        ...state,
        heroes: [...otherHeroes, action.payload],
      };
    default:
      return state;
  }
};
