import * as React from "react";
import { IHero } from "../../models";
import HeroListItemComponent from "./HeroListItem";

export interface IHeroListComponentProps {
  heroes: IHero[];
}

export default function HeroListComponent({ heroes }: IHeroListComponentProps) {
  const itemList = heroes.map(hero => {
    return <HeroListItemComponent key={hero.id} hero={hero} />;
  });

  return (
    <div className="row">
      <div className="col col-12">{itemList}</div>
    </div>
  );
}
