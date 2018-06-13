import { FluxStandardAction } from 'flux-standard-action';
import { IHero } from '../model';

type Payload = IHero[];
interface MetaData {};
export type HeroAPIAction = FluxStandardAction<Payload, MetaData>;

export const LOAD_HEROES = 'LOAD_HEROES';
export const LOAD_STARTED = 'LOAD_STARTED';
export const LOAD_SUCCEEDED = 'LOAD_SUCCEEDED';
export const LOAD_FAILED = 'LOAD_FAILED';

/*
 * action creators
 */
export function loadHeroes(): HeroAPIAction {
  return {
    type: LOAD_HEROES,
    payload: [],
    meta: {}
  };
}

export function loadStarted(): HeroAPIAction {
  return {
    type: LOAD_STARTED,
    payload: [],
    meta: {}
  };
}

export function loadSucceeded(payload: Payload): HeroAPIAction {
  return {
    type: LOAD_SUCCEEDED,
    payload,
    meta: {}
  };
}

export function loadFailed(error:any): HeroAPIAction {
  return {
    type: LOAD_FAILED,
    payload: [],
    error,
    meta: {}
  };
}
