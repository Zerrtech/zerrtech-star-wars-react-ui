import { FluxStandardAction } from "flux-standard-action";
import { IHero } from "./models";

type ListPayload = IHero[];
type UpdatePayload = IHero;
export type HeroAPIAction = FluxStandardAction<ListPayload, {}>;
export interface IHeroUpdateAction
  extends FluxStandardAction<UpdatePayload, {}> {
  payload: UpdatePayload;
}

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
    payload: error,
    error: true,
    meta: {},
  };
}

export function updateHero(payload: UpdatePayload): IHeroUpdateAction {
  return {
    type: ACTIONS.UPDATE_HERO,
    payload,
    meta: {},
    error: false,
  };
}

export function updateHeroStarted(): HeroAPIAction {
  return {
    type: ACTIONS.UPDATE_STARTED,
    meta: {},
    error: false,
  };
}

export function updateHeroSucceeded(payload: UpdatePayload): IHeroUpdateAction {
  return {
    type: ACTIONS.UPDATE_SUCCEEDED,
    payload,
    meta: {},
    error: false,
  };
}

export function updateHeroFailed(error: any): HeroAPIAction {
  return {
    type: ACTIONS.UPDATE_FAILED,
    payload: error,
    error: true,
    meta: {},
  };
}
