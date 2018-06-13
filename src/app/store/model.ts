import { IHeroList } from '../hero/model';

export interface IAppState {
  heroes: IHeroList;
  routes?: any;
}
