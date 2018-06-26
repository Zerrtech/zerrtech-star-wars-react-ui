import { FluxStandardAction } from "flux-standard-action";

export type SquadAction = FluxStandardAction<number, {}>;

export const ACTIONS = {
  ADDED_TO_SQUAD: "ADDED_TO_SQUAD",
  REMOVED_FROM_SQUAD: "REMOVED_FROM_SQUAD",
};

export function removedFromSquad(id: number): SquadAction {
  return {
    type: ACTIONS.REMOVED_FROM_SQUAD,
    payload: id,
    meta: {},
  };
}

export function addedToSquad(id: number): SquadAction {
  return {
    type: ACTIONS.ADDED_TO_SQUAD,
    payload: id,
    meta: {},
  };
}
