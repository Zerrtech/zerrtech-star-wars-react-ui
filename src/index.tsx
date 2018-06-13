import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware, ConnectedRouter } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';
import { reducers } from './app/store/reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import HeroListContainerComponent from './app/hero/heroListContainer';
import HeroDetailContainerComponent from './app/hero/heroDetailContainer';
import rootEpic from './app/store/epics';

declare var window: any;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)
const epicMiddleware = createEpicMiddleware(rootEpic)
let store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(epicMiddleware, middleware),
    ),
);

let root = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={HeroListContainerComponent} />
                <Route path="/hero/:id" component={HeroDetailContainerComponent}/>
            </div>
        </ConnectedRouter>
    </Provider>
);

render(root, document.getElementById('root') as HTMLElement);
registerServiceWorker();
