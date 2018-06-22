import * as React from "react";
import { IHero } from "../../models";

interface IHeroDetailComponentProps {
  hero: IHero;
  onClose: () => void;
}

export default function HeroDetailComponent({
  hero,
  onClose = () => null,
}: IHeroDetailComponentProps) {
  return (
    <div className="row">
      <div className="col col-12">
        <div className="row">
          <div className="col col-12 text-right" onClick={onClose}>
            X
          </div>
        </div>
        <div className="row">
          <div className="col col-6">
            <div className="row">
              <div className="col col-12">{hero.name}</div>
            </div>
            <div className="row">
              <div className="col col-12">
                <img src={hero.imageUrl} />
              </div>
            </div>
          </div>
          <div className="col col-6">
            <div className="row">
              <div className="col col-12">
                <label>Power:</label>
                <span>{hero.power}</span>
              </div>
            </div>
            <div className="row">
              <div className="col col-12">
                <label>Side:</label>
                <span>{hero.light ? "Light" : "Dark"}</span>
              </div>
            </div>
            <div className="row">
              <div className="col col-12">
                <label>Affiliations:</label>
                <span>{hero.affiliations}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
