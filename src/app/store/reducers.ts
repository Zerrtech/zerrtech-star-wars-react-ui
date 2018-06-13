import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { IAppState } from './model';
import { createHeroAPIReducer } from '../hero/api/reducer';

export let reducers = combineReducers<IAppState>({
    heroes: createHeroAPIReducer(),
    router: routerReducer,
});
