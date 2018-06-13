export interface IHero {
  id: number;
  name: string;
  imageUrl: string;
  power: number;
  affiliations: string[],
  light: boolean;
};

export interface IHeroList {
  heroes: IHero[];
  loading: boolean;
  error: any;
};

export const fromServer = (record: any): IHero => ({
  id: record.id,
  name: record.name,
  imageUrl: record.imageUrl,
  power: record.power,
  affiliations: record.affiliations,
  light: record.light
});
