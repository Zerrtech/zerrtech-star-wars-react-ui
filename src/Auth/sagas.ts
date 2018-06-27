import { takeLatest, put, select } from "redux-saga/effects";
import { ACTIONS, loginCallback, setUser } from "./actions";
import { goHeroList } from '../page';
import { auth } from "./api";
import { convertHashToLoginCallback, getUserFromAuth, selectAuth, checkLoggedIn } from "../utils";
import { IAuth0 } from "../models";

function attemptLogin() {
  auth.authorize();
}

function* loginCallbackSaga() {
  const auth0: IAuth0 = yield convertHashToLoginCallback();
  yield put(loginCallback(auth0));

  const user = yield getUserFromAuth(auth0.access_token);
  yield put(setUser(user));

  yield put(goHeroList());
}


function* initSaga() {
  // check logged in
  const initAuth = yield select(selectAuth);
  const loggedIn = checkLoggedIn(initAuth);

  if (loggedIn) {
    const user = yield getUserFromAuth(initAuth.access_token);
    yield put(setUser(user));
  }
  yield loggedIn;
}

function* login() {
  yield takeLatest(ACTIONS.LOGIN, attemptLogin);
}

function* takeLoginCallback() {
  yield takeLatest(ACTIONS.REQUEST_LOGIN_CALLBACK, loginCallbackSaga);
}

function* takeInit() {
  yield takeLatest(ACTIONS.INIT, initSaga);
}

export const SAGAS = [
  login(),
  takeLoginCallback(),
  takeInit(),
];
