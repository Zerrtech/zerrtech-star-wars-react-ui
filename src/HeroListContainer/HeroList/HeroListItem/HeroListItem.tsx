import * as React from "react";
import Link from "redux-first-router-link";
import { goHeroDetail } from "../../../page";
import { IHero } from "../../../models";
import "./HeroListItem.css";

export interface IHeroListItemComponentProps {
  hero: IHero;
}

export default function HeroListItemComponent({
  hero
}: IHeroListItemComponentProps) {
  const heroSideClass = hero.light ? "light-side" : "dark-side";
  const heroClasses = "hero-list-item-root row " + heroSideClass;

  return (
    <Link to={goHeroDetail(hero.id)}>
      <div className={heroClasses}>
        <div className="force-color col col-1" />
        <div className="col col-5">{hero.name}</div>
        <div className="col col-5">
          <div className="row">
            <div className="col col-12">Power: {hero.power}</div>
          </div>
          <div className="row">
            <div className="col col-12">Affiliations: {hero.affiliations}</div>
          </div>
        </div>
        <div className="col col-1">&gt;</div>
      </div>
    </Link>
  );
}
