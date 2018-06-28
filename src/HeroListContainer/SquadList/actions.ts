import { IFSARequiredPayload } from "../../actions";

export type SquadModifyAction = IFSARequiredPayload<number>;
export type SquadLoadAction = IFSARequiredPayload<number[]>;

export const ACTIONS = {
  ADDED_TO_SQUAD: "ADDED_TO_SQUAD",
  REMOVED_FROM_SQUAD: "REMOVED_FROM_SQUAD",
  NEW_SQUAD_LOADED: "NEW_SQUAD_LOADED",
};

export function removedFromSquad(id: number): SquadModifyAction {
  return {
    type: ACTIONS.REMOVED_FROM_SQUAD,
    payload: id,
  };
}

export function addedToSquad(id: number): SquadModifyAction {
  return {
    type: ACTIONS.ADDED_TO_SQUAD,
    payload: id,
  };
}

export function newSquadLoaded(idList: number[]): SquadLoadAction {
  return {
    type: ACTIONS.NEW_SQUAD_LOADED,
    payload: idList,
  };
}
