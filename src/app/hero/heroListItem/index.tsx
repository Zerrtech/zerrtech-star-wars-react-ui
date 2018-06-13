import * as React from 'react';
import { IHero } from '../model';
import './index.css';

export interface HeroListItemComponentProps {
    hero: IHero;
    onSelect: (hero: IHero) => void
};

export function HeroListItemComponent({
    hero,
    onSelect = (hero: IHero) => null
} : HeroListItemComponentProps) {

  const heroSideClass = hero.light ? 'light-side' : 'dark-side';
  const heroClasses = "hero-list-item-root row " + heroSideClass;

  return (
    <div className={heroClasses} onClick={(e) => onSelect(hero)}>
        <div className="force-color col col-1"></div>
        <div className="col col-5">{ hero.name }</div>
        <div className="col col-5">
            <div className="row">
            <div className="col col-12">Power: { hero.power }</div>
            </div>
            <div className="row">
            <div className="col col-12">Affiliations: { hero.affiliations }</div>
            </div>
        </div>
        <div className="col col-1">&gt;</div>
    </div>
  
  );

}
