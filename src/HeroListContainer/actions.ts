import { FluxStandardAction } from "flux-standard-action";
import { IHero } from "./models";

type ListPayload = IHero[];
type UpdatePayload = IHero;
export type HeroAPIAction = FluxStandardAction<ListPayload, {}>;
export type HeroUpdateAction = FluxStandardAction<UpdatePayload, {}>;

export const ACTIONS = {
  LOAD_HEROES: "LOAD_HEROES",
  LOAD_STARTED: "LOAD_STARTED",
  LOAD_SUCCEEDED: "LOAD_SUCCEEDED",
  LOAD_FAILED: "LOAD_FAILED",
  UPDATE_HERO: "UPDATE_HERO",
};

/*
 * action creators
 */
export function loadHeroes(): HeroAPIAction {
  return {
    type: ACTIONS.LOAD_HEROES,
    payload: [],
    meta: {},
  };
}

export function loadStarted(): HeroAPIAction {
  return {
    type: ACTIONS.LOAD_STARTED,
    payload: [],
    meta: {},
  };
}

export function loadSucceeded(payload: ListPayload): HeroAPIAction {
  return {
    type: ACTIONS.LOAD_SUCCEEDED,
    payload,
    meta: {},
  };
}

export function loadFailed(error: any): HeroAPIAction {
  return {
    type: ACTIONS.LOAD_FAILED,
    payload: [],
    error,
    meta: {},
  };
}

export function updateHero(payload: UpdatePayload): HeroUpdateAction {
  return {
    type: ACTIONS.UPDATE_HERO,
    payload,
    meta: {},
  };
}
