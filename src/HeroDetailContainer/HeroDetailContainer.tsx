import * as React from "react";
import { connect } from "react-redux";
import { back } from "redux-first-router";
import { loadHeroes } from "../HeroListContainer/actions";
import { IAppState } from "../models";
import { IHeroList } from "../models";
import { goHeroList } from "../page";
import HeroDetailComponent from "./HeroDetail";
import { ACTIONS } from "../page";

interface IDispatchProps {
  loadHeroes: () => void;
  goHeroList: () => void;
}

interface IHeroDetailContainerComponentState {
  power: string | undefined;
}

interface IStateProps extends IHeroList {
  id: number;
  referrer: any;
}

interface IHeroDetailContainerComponentProps
  extends IStateProps,
    IDispatchProps {}

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
    this.props.loadHeroes();
  }

  public onClose = () => {
    if (Object.keys(ACTIONS).includes(this.props.referrer.type)) {
      back();
    } else {
      this.props.goHeroList();
    }
  };

  public onPowerChange = (val: string) => {
    this.setState({ power: val });
  };

  public savePower = () => {
    // TODO: Create action creator / reducer to change hero's power in app state
    console.log("this should save", this.state.power, "as the new power");
  };

  public render() {
    const { heroes, id } = this.props;
    const matches = heroes.filter((hero) => hero.id === id);
    const matchingHero = matches[0];
    if (matchingHero) {
      return (
        <HeroDetailComponent
          hero={matchingHero}
          onClose={this.onClose}
          onPowerChange={this.onPowerChange}
          powerValue={this.state.power || matchingHero.power.toString()}
          powerIsDirty={
            this.state.power !== undefined &&
            this.state.power !== matchingHero.power.toString()
          }
          savePower={this.savePower}
        />
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  loadHeroes: () => dispatch(loadHeroes()),
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
