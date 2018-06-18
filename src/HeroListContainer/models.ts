import { IHero } from "../models";

export const fromServer = (record: any): IHero => ({
  id: record.id,
  name: record.name,
  imageUrl: record.imageUrl,
  power: record.power,
  affiliations: record.affiliations,
  light: record.light
});

export { IHero };
