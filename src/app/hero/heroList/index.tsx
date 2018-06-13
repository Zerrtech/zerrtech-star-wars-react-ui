import * as React from 'react';
import { IHero } from '../model';
import { HeroListItemComponent } from '../heroListItem';
import './index.css';

export interface HeroListComponentProps {
    heroes: IHero[];
    onSelect: (hero: IHero) => void
};

export function HeroListComponent({
    heroes,
    onSelect = (hero: IHero) => null
} : HeroListComponentProps) {

  const item_list = heroes.map((hero) => {
    return (
      <HeroListItemComponent key={hero.id} hero={hero} onSelect={(hero) => onSelect(hero)}></HeroListItemComponent>
    );
  });

  return (
    <div className="row">
        <div className="col col-12">
            {item_list}
        </div>
    </div>
  );

}
