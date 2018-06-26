import * as React from "react";
import { IHero } from "../../models";
import HeroListItemComponent from "./HeroListItem";

import "./HeroList.css";

export interface IHeroListComponentProps {
  heroes: IHero[];
  forceFilter: string;
  onFilterChange: (val: string) => void;
  addToSquad: (id: number) => void;
}

export default function HeroListComponent({
  heroes,
  forceFilter,
  onFilterChange,
  addToSquad,
}: IHeroListComponentProps) {
  const itemList = heroes.map((hero) => {
    return (
      <HeroListItemComponent
        key={hero.id}
        hero={hero}
        addToSquad={addToSquad}
      />
    );
  });

  const onForceFilterChange = (evt: any) => onFilterChange(evt.target.value);
  return (
    <div className="hero-list col-6">
      <div className="row form-inline">
        <div className="form-group col-12 force-filter">
          <label htmlFor="force">
            <b>Force</b>
          </label>
          <select
            id="force"
            className="force-control"
            value={forceFilter}
            onChange={onForceFilterChange}
          >
            <option>All</option>
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>
      </div>
      {itemList}
    </div>
  );
}
