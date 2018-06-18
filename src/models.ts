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
  error: any;
}

export interface IAppState {
  heroes: IHeroList;
  heroDetail: IHeroDetail;
}
