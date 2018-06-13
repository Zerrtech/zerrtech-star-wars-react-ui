import { Epic } from 'redux-observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

import { IAppState } from '../../store/model';
import { HeroAPIAction, LOAD_HEROES, loadSucceeded, loadFailed, loadStarted} from './actions';
import { HeroAPIService } from './service';

const heroesNotAlreadyFetched = (
  state: IAppState): boolean => !(
    state &&
    state.heroes &&
    state.heroes.heroes.length);

export default function createLoadHeroEpic(): Epic<HeroAPIAction, IAppState> {
    var service = new HeroAPIService();
    return (action$, store) => action$
      .ofType(LOAD_HEROES)
      .filter(() => heroesNotAlreadyFetched(store.getState()))
      .switchMap(() => service.getAll()
        .map(data => loadSucceeded(data))
        .catch(response => of(loadFailed({
          status: '' + response.status,
        })))
        .startWith(loadStarted()));
  }
