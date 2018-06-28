import * as React from "react";
import Link from "redux-first-router-link";
import { goHeroDetail } from "../../../page";

import "./SquadListItem.css";
import { STATIC_URL } from "../../../utils";

const SquadListItem = ({ hero, removeFromSquad }: any) => {
  const heroSideClass = hero.light ? "light-side" : "dark-side";
  const heroClasses = "squad-list-item " + heroSideClass;

  const removeClicked = () => {
    removeFromSquad(hero.id);
  };

  return (
    <div className={`col-5 ml-3 mb-3 text-center ${heroClasses}`}>
      <div className="row">
        <div className="squad-remove-button col-12">
          <button
            onClick={removeClicked}
            type="button"
            className="close"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="squad-hero-detail col-12">
          <Link to={goHeroDetail(hero.id)}>
            <div className="row">
              <div className="col-12">
                <img height={150} src={STATIC_URL + hero.imageUrl} />
              </div>
            </div>
            <div className="row">
              <div className="col-12">{hero.name}</div>
            </div>
            <div className="row">
              <div className="col-12">{hero.power}</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SquadListItem;
