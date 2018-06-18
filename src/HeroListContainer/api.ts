import { put } from "redux-saga/effects";
import { fromServer } from "./models";
import { loadSucceeded, loadFailed, loadStarted } from "./actions";

// The heroes API we created.
const URL = "https://angular-1-training-class-api.herokuapp.com/heroes";

export function* fetchAllHeroes() {
  try {
    yield put(loadStarted());
    const resp = yield fetch(URL, {
      method: "GET"
    });
    const data = yield resp.json();
    const finalData = data.map(fromServer);
    yield put(loadSucceeded(finalData));
  } catch (e) {
    yield put(loadFailed(e));
  }
}
