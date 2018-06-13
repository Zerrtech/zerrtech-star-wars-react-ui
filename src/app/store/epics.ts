import HeroAPIEpics from '../hero/api/epics';
import { combineEpics } from 'redux-observable';

export default combineEpics(
  HeroAPIEpics()
);
