import { takeLatest } from "redux-saga/effects";
import { ACTIONS } from "./actions";
import { fetchAllHeroes, updateHeroOnServer } from "./api";

function* loadData() {
  yield takeLatest(ACTIONS.LOAD_HEROES, fetchAllHeroes);
}
function* updateHeroListener() {
  yield takeLatest(ACTIONS.UPDATE_HERO, updateHeroOnServer);
}

export const SAGAS = [loadData(), updateHeroListener()];
