import { connectRoutes } from "redux-first-router";
import * as queryString from "query-string";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createHistory from "history/createBrowserHistory";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

import { reducers as otherReducers } from "./reducers";
import sagas from "./sagas";
import { reducer as pageReducer } from "./page";

import { routesMap } from "./routes";

declare var window: any;

function* rootSaga() {
  yield all([...sagas]);
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const { reducer, middleware, enhancer, initialDispatch }: any = connectRoutes(
  history,
  routesMap,
  {
    querySerializer: queryString,
    initialDispatch: false,
  },
);

const reducers = combineReducers({
  ...otherReducers,
  location: reducer,
  page: pageReducer,
});

const store = createStore(
  reducers,
  composeEnhancers(enhancer, applyMiddleware(middleware, sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
initialDispatch(); // need this in order to capture initial page load action in Sagas

export default store;
