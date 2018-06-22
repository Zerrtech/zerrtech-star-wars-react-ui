import * as React from "react";
import { connect } from "react-redux";
import { loadHeroes } from "./actions";
import { IHero, IHeroList } from "../models";
import { IAppState } from "../models";
import HeroListComponent from "./HeroList";

const sortHeroes = (heroList: IHero[]) =>
  heroList.sort((a, b) => {
    return b.power < a.power ? -1 : 1;
  });

interface IAppProps {
  loadHeroes: () => void;
}

interface IStateProps extends IHeroList {
  history: any;
}

interface IHeroListContainerComponentProps extends IStateProps, IAppProps {}

class HeroListContainerComponent extends React.Component<
  IHeroListContainerComponentProps,
  {}
> {
  public componentDidMount() {
    this.props.loadHeroes();
  }

  public render() {
    const { heroes } = this.props;
    const sortedHeroes = sortHeroes(heroes);
    return <HeroListComponent heroes={sortedHeroes} />;
  }
}

const mapDispatchToProps = (dispatch: any): IAppProps => ({
  loadHeroes: () => dispatch(loadHeroes()),
});

const mapStateToProps = (state: IAppState, ownProps: any): IStateProps => {
  return {
    heroes: state.heroes.heroes,
    loading: state.heroes.loading,
    error: state.heroes.error,
    history: ownProps.history,
  };
};

export default connect<IStateProps, IAppProps, void>(
  mapStateToProps,
  mapDispatchToProps,
)(HeroListContainerComponent);
