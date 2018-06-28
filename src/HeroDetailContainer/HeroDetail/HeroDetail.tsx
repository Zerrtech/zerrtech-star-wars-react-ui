import * as React from "react";
import { IHero } from "../../models";
import { STATIC_URL } from "../../utils";

import "./HeroDetail.css";

interface IHeroDetailComponentProps {
  hero: IHero;
  onClose: () => void;
  onRefresh: () => void;
  onPowerChange: (val: number) => void;
  powerValue: number;
  powerIsDirty: boolean;
  savePower: () => void;
}

export default function HeroDetailComponent({
  hero,
  onClose = () => null,
  onRefresh = () => null,
  onPowerChange,
  powerValue,
  powerIsDirty,
  savePower,
}: IHeroDetailComponentProps) {
  const onPowerInputChange = (evt: any) => {
    onPowerChange(parseInt(evt.target.value, 10));
  };

  return (
    <div className="hero-detail row">
      <div className="col col-7 ml-auto mr-auto">
        <div className="row">
          <div className="col col-12 text-right">
            <button
              type="button"
              className="btn btn-secondary refresh-detail-button"
              aria-label="Refresh"
              onClick={onRefresh}
            >
              <span className="oi oi-reload" />
            </button>
            <button
              type="button"
              className="btn btn-primary close-detail-button"
              aria-label="Close"
              onClick={onClose}
            >
              <span className="oi oi-x" />
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col col-6">
            <div className="row">
              <h3 className="col col-12">{hero.name}</h3>
            </div>
            <div className="row">
              <div className="col col-12">
                <img src={STATIC_URL + hero.imageUrl} />
              </div>
            </div>
          </div>
          <div className="col col-6 mt-5">
            <div className="row">
              <div className="col col-12">
                <label htmlFor="hero-power-input">Power:</label>
                <input
                  id="hero-power-input"
                  type="number"
                  className="text-right"
                  placeholder="Enter Power"
                  step={1000}
                  value={powerValue}
                  onChange={onPowerInputChange}
                />
                {powerIsDirty && (
                  <button
                    className="btn btn-success btn-sm save-button"
                    onClick={savePower}
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col col-12">
                <label>Side:</label>
                <span>{hero.light ? " Light" : " Dark"}</span>
              </div>
            </div>
            <div className="row">
              <div className="col col-12">
                <label>Affiliations:</label>
                <span>{` ${hero.affiliations.join(", ")}`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
