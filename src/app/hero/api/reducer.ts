import { HeroAPIAction, LOAD_STARTED, LOAD_SUCCEEDED, LOAD_FAILED } from './actions';
import { IHeroList } from '../model';
import { Action } from 'redux';

const INITIAL_STATE: IHeroList = {
  heroes: [],
  loading: false,
  error: null,
};

export function createHeroAPIReducer() {
  return function heroReducer(state: IHeroList = INITIAL_STATE,
    a: Action): IHeroList {

    const action = a as HeroAPIAction;

    switch (action.type) {
      case LOAD_STARTED:
        return {
          ...state,
          heroes: [],
          loading: true,
          error: null,
        };
      case LOAD_SUCCEEDED:
        return {
          ...state,
          heroes: action.payload,
          loading: false,
          error: null,
        };
      case LOAD_FAILED:
        return {
          ...state,
          heroes: [],
          loading: false,
          error: action.error,
        };
    }

    return state;
  };
}
