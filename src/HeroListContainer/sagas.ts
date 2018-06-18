import { takeLatest } from "redux-saga/effects";
import { ACTIONS } from "./actions";
import { fetchAllHeroes } from "./api";

function* loadData() {
  yield takeLatest(ACTIONS.LOAD_HEROES, fetchAllHeroes);
}

export const SAGAS = [loadData()];
