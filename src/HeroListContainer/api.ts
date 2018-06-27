import { put } from "redux-saga/effects";
import { fromServer } from "./models";
import { loadSucceeded, loadFailed, loadStarted } from "./actions";
import { UnauthorizedError } from "../errors";

// The heroes API we created.
const URL = "https://angular-1-training-class-api.herokuapp.com/heroes";

export function* fetchAllHeroes() {
  try {
    yield put(loadStarted());
    const resp = yield fetch(URL, {
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
