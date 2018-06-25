import { takeLatest, put } from "redux-saga/effects";
import { ACTIONS, loginCallback } from "./actions";
import { goHeroList } from '../page';
import { auth } from "./api";
import { convertHashToLoginCallback } from "../utils";
import { IAuth0 } from "../models";

function attemptLogin() {
  auth.authorize();
}

function* loginCallbackSaga() {
  const auth0: IAuth0 = yield convertHashToLoginCallback();

  yield put(loginCallback(auth0));

  yield put(goHeroList());
}


function* login() {
  yield takeLatest(ACTIONS.LOGIN, attemptLogin);
}

function* takeLoginCallback() {
  yield takeLatest(ACTIONS.REQUEST_LOGIN_CALLBACK, loginCallbackSaga);
}

export const SAGAS = [
  login(),
  takeLoginCallback(),
];
