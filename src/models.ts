import { IHeroDetail } from "./HeroDetailContainer/models";

export interface IHero {
  id: number;
  name: string;
  imageUrl: string;
  power: number;
  affiliations: string[];
  light: boolean;
}

export interface IHeroList {
  heroes: IHero[];
  loading: boolean;
  error: boolean;
  errorObj?: string;
}

export interface ILocation {
  pathname: string;
  type: string;
  payload: any;
  prev: any;
}

export interface IAppState {
  heroes: IHeroList;
  heroDetail: IHeroDetail;
  squadList: number[];
  page: string;
  location: ILocation;
}
