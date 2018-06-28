
import { selectAccessToken, API_URL } from '../utils';

import { put, select } from "redux-saga/effects";
import { fromServer, toServer } from "./models";
import {
  loadSucceeded,
  loadFailed,
  loadStarted,
  updateHeroStarted,
  updateHeroSucceeded,
  updateHeroFailed,
  HeroUpdateAction,
} from "./actions";
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

export function* updateHeroOnServer(action: HeroUpdateAction) {
  try {
    const hero = action.payload;
    yield put(updateHeroStarted());
    const preparedBody = toServer(hero);
    const resp = yield fetch(`${API_URL}/hero/${hero.id}`, {
      method: "PUT",
      mode: "cors",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preparedBody),
    });
    const respChecked = yield checkStatus(resp);
    const data = yield respChecked.json();
    yield put(updateHeroSucceeded(data));
  } catch (e) {
    yield put(updateHeroFailed(e));
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
