import { put, select } from "redux-saga/effects";
import { fromServer } from "./models";
import { loadSucceeded, loadFailed, loadStarted } from "./actions";
import { selectAccessToken, API_URL } from '../utils';
import { UnauthorizedError } from "../errors";


export function* fetchAllHeroes() {
  try {
    yield put(loadStarted());
    const accessToken = yield select(selectAccessToken);
    const resp = yield fetch(API_URL + '/heroes/', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
    });
    const respChecked = yield checkStatus(resp);
    const data = yield respChecked.json();
    const finalData = data.map(fromServer);
    yield put(loadSucceeded(finalData));
  } catch (e) {
    yield put(loadFailed(e));
  }
}

function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else if (response.status === 401) {
    const unauthorizedError = new UnauthorizedError(response.statusText);
    unauthorizedError.response = response;
    return Promise.reject(unauthorizedError);
  } else {
    const error = new Error(response.statusText);
    return Promise.reject(error);
  }
}
