import { get } from "lodash";
import { HeroAPIAction, ACTIONS } from "./actions";
import { IHeroList } from "../models";

const INITIAL_STATE: IHeroList = {
  heroes: [],
  loading: false,
  error: false,
  errorObj: undefined,
};

export const reducer = (state = INITIAL_STATE, action: HeroAPIAction) => {
  switch (action.type) {
    case ACTIONS.LOAD_STARTED:
      return {
        ...state,
        heroes: [],
        loading: true,
        error: false,
      };
    case ACTIONS.LOAD_SUCCEEDED:
      return {
        ...state,
        heroes: action.payload === undefined ? [] : action.payload,
        loading: false,
        error: false,
      };
    case ACTIONS.LOAD_FAILED:
      return {
        ...state,
        heroes: [],
        loading: false,
        error: true,
        errorObj: action.payload,
      };
    case ACTIONS.UPDATE_HERO:
      if (action.payload === undefined) {
        return state;
      }
      const unchangedHeroes = state.heroes.filter(
        (hero) => hero.id !== get(action, ["payload", "id"]),
      );

      return {
        ...state,
        heroes: [...unchangedHeroes, action.payload],
      };
    case ACTIONS.UPDATE_STARTED:
      return {
        ...state,
        error: false,
      };
    case ACTIONS.UPDATE_SUCCEEDED:
      if (action.payload === undefined) {
        return state;
      }

      const otherHeroes = state.heroes.filter(
        (hero) => hero.id !== get(action, ["payload", "id"]),
      );
      return {
        ...state,
        heroes: [...otherHeroes, action.payload],
        error: false,
      };
    case ACTIONS.UPDATE_FAILED:
      return {
        ...state,
        error: true,
        errorObj: action.payload,
      };
    default:
      return state;
  }
};
