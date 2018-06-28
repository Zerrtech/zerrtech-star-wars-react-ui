import { IHero } from "./models";
import { IFSARequiredPayload, FSANoPayload } from "../actions";

type ListPayload = IHero[];
type UpdatePayload = IHero;
export type HeroAPIAction = IFSARequiredPayload<ListPayload>;
export type HeroAPIActionNoPayload = FSANoPayload;
export type HeroUpdateAction = IFSARequiredPayload<UpdatePayload>;

export const ACTIONS = {
  LOAD_HEROES: "LOAD_HEROES",
  LOAD_STARTED: "LOAD_STARTED",
  LOAD_SUCCEEDED: "LOAD_SUCCEEDED",
  LOAD_FAILED: "LOAD_FAILED",
  UPDATE_HERO: "UPDATE_HERO",
  UPDATE_STARTED: "UPDATE_STARTED",
  UPDATE_SUCCEEDED: "UPDATE_SUCCEEDED",
  UPDATE_FAILED: "UPDATE_FAILED",
};

/*
 * action creators
 */
export function loadHeroes(): HeroAPIAction {
  return {
    type: ACTIONS.LOAD_HEROES,
    payload: [],
    error: false,
  };
}

export function loadStarted(): HeroAPIActionNoPayload {
  return {
    type: ACTIONS.LOAD_STARTED,
    error: false,
  };
}

export function loadSucceeded(payload: ListPayload): HeroAPIAction {
  return {
    type: ACTIONS.LOAD_SUCCEEDED,
    payload,
    error: false,
  };
}

export function loadFailed(error: any): HeroAPIAction {
  return {
    type: ACTIONS.LOAD_FAILED,
    payload: error,
    error: true,
  };
}

export function updateHero(payload: UpdatePayload): HeroUpdateAction {
  return {
    type: ACTIONS.UPDATE_HERO,
    payload,
    error: false,
  };
}

export function updateHeroStarted(): HeroAPIActionNoPayload {
  return {
    type: ACTIONS.UPDATE_STARTED,
    error: false,
  };
}

export function updateHeroSucceeded(payload: UpdatePayload): HeroUpdateAction {
  return {
    type: ACTIONS.UPDATE_SUCCEEDED,
    payload,
    error: false,
  };
}

export function updateHeroFailed(error: any): HeroAPIAction {
  return {
    type: ACTIONS.UPDATE_FAILED,
    payload: error,
    error: true,
  };
}
