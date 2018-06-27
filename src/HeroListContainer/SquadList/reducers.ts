import { ACTIONS, SquadModifyAction, SquadLoadAction } from "./actions";

type SquadAction = SquadModifyAction | SquadLoadAction;
const INITIAL_STATE: number[] = [];
const DEFAULT_ACTION: SquadModifyAction = {
  type: "NONE",
  payload: undefined,
};

export const reducer = (
  state = INITIAL_STATE,
  action: SquadAction = DEFAULT_ACTION,
) => {
  switch (action.type) {
    case ACTIONS.ADDED_TO_SQUAD:
      return action.payload !== undefined ? [...state, action.payload] : state;
    case ACTIONS.REMOVED_FROM_SQUAD:
      return state.filter((id) => id !== action.payload);
    case ACTIONS.NEW_SQUAD_LOADED:
      return action.payload !== undefined ? action.payload : state;
    default:
      return state;
  }
};
