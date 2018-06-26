import { ACTIONS } from "./actions";
import { ACTIONS as PAGE_ACTIONS } from "../../page";
import { FluxStandardAction } from "flux-standard-action";
import { get } from "lodash";

type SquadPayload = number | string | undefined;
type SquadAction = FluxStandardAction<SquadPayload, {}>;
type SquadState = SquadPayload[];

const INITIAL_STATE: SquadState = [];
const DEFAULT_ACTION: SquadAction = {
  type: "NONE",
  payload: undefined,
};

export const reducer = (
  state: SquadState = INITIAL_STATE,
  action: SquadAction = DEFAULT_ACTION,
): SquadState => {
  switch (action.type) {
    case ACTIONS.ADDED_TO_SQUAD:
      return [...state, action.payload];
    case ACTIONS.REMOVED_FROM_SQUAD:
      return state.filter((id) => id !== action.payload);
    case PAGE_ACTIONS.HERO_LIST:
      const idList = get(action, "payload.idList");
      return idList
        ? String(idList)
            .split("-")
            .map((id) => parseInt(id, 10))
        : [];
    default:
      return state;
  }
};
