import { IHero } from "../models";

interface IServerHero {
  id: number;
  name: string;
  imageUrl: string;
  power: number;
  affiliations: string[];
  light: boolean;
}

export const fromServer = (record: IServerHero): IHero => ({
  id: record.id,
  name: record.name,
  imageUrl: record.imageUrl,
  power: record.power,
  affiliations: record.affiliations,
  light: record.light,
});

export const toServer = (hero: IHero): IServerHero => ({
  id: hero.id,
  name: hero.name,
  imageUrl: hero.imageUrl,
  power: hero.power,
  affiliations: hero.affiliations,
  light: hero.light,
});

export { IHero };
