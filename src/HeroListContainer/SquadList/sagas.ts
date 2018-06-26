import { takeLatest, select, put } from "redux-saga/effects";
import { ACTIONS } from "./actions";
import { IAppState } from "../../models";
import { goHeroList } from "../../page";

function* updateRoute() {
  const squadList = yield select((state: IAppState) => state.squadList);
  yield put(goHeroList(squadList));
}

function* squadListListener() {
  yield takeLatest(
    [ACTIONS.ADDED_TO_SQUAD, ACTIONS.REMOVED_FROM_SQUAD],
    updateRoute,
  );
}

export const SAGAS = [squadListListener()];
