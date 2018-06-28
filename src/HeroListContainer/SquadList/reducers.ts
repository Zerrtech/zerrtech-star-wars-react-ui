import { ACTIONS, SquadModifyAction, SquadLoadAction } from "./actions";

type SquadAction = SquadModifyAction | SquadLoadAction;
const INITIAL_STATE: number[] = [];

export const reducer = (state = INITIAL_STATE, action: SquadAction) => {
  switch (action.type) {
    case ACTIONS.ADDED_TO_SQUAD:
      return [...state, action.payload];
    case ACTIONS.REMOVED_FROM_SQUAD:
      return state.filter((id) => id !== action.payload);
    case ACTIONS.NEW_SQUAD_LOADED:
      return action.payload;
    default:
      return state;
  }
};
