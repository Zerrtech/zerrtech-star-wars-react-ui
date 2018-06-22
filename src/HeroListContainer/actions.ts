import { FluxStandardAction } from "flux-standard-action";
import { IHero } from "./models";

type Payload = IHero[];
export type HeroAPIAction = FluxStandardAction<Payload, {}>;

export const ACTIONS = {
  LOAD_HEROES: "LOAD_HEROES",
  LOAD_STARTED: "LOAD_STARTED",
  LOAD_SUCCEEDED: "LOAD_SUCCEEDED",
  LOAD_FAILED: "LOAD_FAILED",
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

export function loadSucceeded(payload: Payload): HeroAPIAction {
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
