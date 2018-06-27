import { takeLatest, select, put } from "redux-saga/effects";
import { get } from "lodash";
import { ACTIONS } from "./actions";
import { IAppState } from "../models";
import { newSquadLoaded } from "../HeroListContainer/SquadList";

function* updateState() {
  const location = yield select((state: IAppState) => get(state, ["location"]));
  const kind = get(location, "kind");
  if (kind !== "load") {
    return;
  }
  let idList = get(location, ["query", "id"]);
  if (idList !== undefined && idList.constructor !== Array) {
    idList = [idList];
  }

  yield put(
    newSquadLoaded(idList ? idList.map((id: string) => parseInt(id, 10)) : []),
  );
}

function* routeChangeListener() {
  yield takeLatest(ACTIONS.HERO_LIST, updateState);
}

export const SAGAS = [routeChangeListener()];
