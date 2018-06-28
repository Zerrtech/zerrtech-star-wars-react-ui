import * as React from "react";
import { IHero } from "../../../models";
import "./HeroListItem.css";

export interface IHeroListItemComponentProps {
  hero: IHero;
  addToSquad: (id: number) => void;
}

export default function HeroListItemComponent({
  hero,
  addToSquad,
}: IHeroListItemComponentProps) {
  const heroSideClass = hero.light ? "light-side" : "dark-side";
  const heroClasses = "hero-list-item-root row " + heroSideClass;

  const heroClicked = () => {
    addToSquad(hero.id);
  };
  return (
    <a onClick={heroClicked} className={heroClasses}>
      <h5 className="col-6">{hero.name}</h5>
      <div className="col-5">
        <div className="row">
          <div className="col col-12">Power: {hero.power}</div>
        </div>
        <div className="row">
          <div className="col col-12">
            Affiliations: {hero.affiliations.join(", ")}
          </div>
        </div>
      </div>
      <div className="col-1">
        <span className="oi oi-chevron-right" />
      </div>
    </a>
  );
}
