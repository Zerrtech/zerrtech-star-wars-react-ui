import { IHeroDetail } from "./HeroDetailContainer/models";
import { IAuthState } from './Auth';

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
  auth: IAuthState,
}

export interface IAuth0 {
  access_token: string | null,
  id_token: string | null,
  expires_at: string | null,
}
