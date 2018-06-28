import { put } from "redux-saga/effects";
import { fromServer, toServer } from "./models";
import {
  loadSucceeded,
  loadFailed,
  loadStarted,
  updateHeroStarted,
  updateHeroSucceeded,
  updateHeroFailed,
  IHeroUpdateAction,
} from "./actions";
import { UnauthorizedError } from "../errors";

// The heroes API we created.
const API_URL = "https://angular-1-training-class-api.herokuapp.com";

export function* fetchAllHeroes() {
  try {
    yield put(loadStarted());
    const resp = yield fetch(`${API_URL}/heroes`, {
      method: "GET",
    });
    const respChecked = yield checkStatus(resp);
    const data = yield respChecked.json();
    const finalData = data.map(fromServer);
    yield put(loadSucceeded(finalData));
  } catch (e) {
    yield put(loadFailed(e));
  }
}

export function* updateHeroOnServer(action: IHeroUpdateAction) {
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
