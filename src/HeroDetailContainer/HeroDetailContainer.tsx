import * as React from "react";
import { connect } from "react-redux";
import { back } from "redux-first-router";
import { loadHeroes, updateHero } from "../HeroListContainer/actions";
import { IAppState } from "../models";
import { IHeroList } from "../models";
import { goHeroList } from "../page";
import HeroDetailComponent from "./HeroDetail";
import { ACTIONS } from "../page";
import { IHero } from "../HeroListContainer/models";

interface IDispatchProps {
  loadHeroes: () => void;
  updateHero: (hero: IHero) => void;
  goHeroList: () => void;
}

interface IHeroDetailContainerComponentState {
  power: number | undefined;
}

interface IStateProps extends IHeroList {
  id: number;
  referrer: any;
}

interface IHeroDetailContainerComponentProps
  extends IStateProps,
  IDispatchProps { }

class HeroDetailContainerComponent extends React.Component<
  IHeroDetailContainerComponentProps,
  IHeroDetailContainerComponentState
  > {

  public constructor(props: IHeroDetailContainerComponentProps) {
    super(props);
    this.state = {
      power: undefined,
    };
  }

  public componentDidMount() {
    if (this.props.heroes.length === 0) {
      this.props.loadHeroes();
    }
  }

  public onClose = () => {
    if (Object.keys(ACTIONS).includes(this.props.referrer.type)) {
      back();
    } else {
      this.props.goHeroList();
    }
  };

  public onRefresh = () => {
    this.props.loadHeroes();
    this.setState({ power: undefined });
  };

  public onPowerChange = (val: number) => {
    this.setState({ power: val });
  };

  public savePower = () => {
    const matchingHero = this.getHero();
    this.props.updateHero({
      ...matchingHero,
      power: this.state.power || matchingHero.power,
    });
  };

  public render() {
    const matchingHero = this.getHero();
    if (matchingHero) {
      return (
        <HeroDetailComponent
          hero={matchingHero}
          onClose={this.onClose}
          onRefresh={this.onRefresh}
          onPowerChange={this.onPowerChange}
          powerValue={this.state.power || matchingHero.power}
          powerIsDirty={
            this.state.power !== undefined &&
            this.state.power !== matchingHero.power
          }
          savePower={this.savePower}
        />
      );
    } else {
      return <div>Loading...</div>;
    }
  }
  private getHero() {
    const { heroes, id } = this.props;
    const matches = heroes.filter((hero) => hero.id === id);
    return matches[0];
  }
}

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  loadHeroes: () => dispatch(loadHeroes()),
  updateHero: (hero: IHero) => dispatch(updateHero(hero)),
  goHeroList: () => dispatch(goHeroList()),
});

const mapStateToProps = (state: IAppState): IStateProps => {
  return {
    heroes: state.heroes.heroes,
    loading: state.heroes.loading,
    error: state.heroes.error,
    id: state.heroDetail.id,
    referrer: state.location.prev,
  };
};

export default connect<IStateProps, IDispatchProps, void>(
  mapStateToProps,
  mapDispatchToProps,
)(HeroDetailContainerComponent);
