import { put, select } from "redux-saga/effects";
import { fromServer } from "./models";
import { loadSucceeded, loadFailed, loadStarted } from "./actions";
import { selectAccessToken, API_URL } from '../utils';


export function* fetchAllHeroes() {
  try {
    yield put(loadStarted());
    const accessToken = yield select(selectAccessToken);
    const resp = yield fetch(API_URL + '/heroes/', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
    });
    const data = yield resp.json();
    const finalData = data.map(fromServer);
    yield put(loadSucceeded(finalData));
  } catch (e) {
    yield put(loadFailed(e));
  }
}
