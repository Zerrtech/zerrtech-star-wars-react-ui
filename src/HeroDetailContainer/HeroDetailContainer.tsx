import * as React from "react";
import { connect } from "react-redux";
import { loadHeroes } from "../HeroListContainer/actions";
import { IAppState } from "../models";
import { IHeroList } from "../models";
import { goHeroList } from "../page";
import HeroDetailComponent from "./HeroDetail";

interface IDispatchProps {
  loadHeroes: () => void;
  goHeroList: () => void;
}

interface IStateProps extends IHeroList {
  id: number;
  history: any;
}

interface IHeroDetailContainerComponentProps
  extends IStateProps,
  IDispatchProps { }

class HeroDetailContainerComponent extends React.Component<
  IHeroDetailContainerComponentProps,
  {}
  > {
  public componentDidMount() {
    this.props.loadHeroes();
  }

  public onClose() {
    this.props.goHeroList();
  }

  public render() {
    const { heroes, id } = this.props;
    const matches = heroes.filter((hero) => hero.id === id);
    const matchingHero = matches[0];
    if (matchingHero) {
      return <HeroDetailComponent hero={matchingHero} onClose={() => this.onClose()} />;
    } else {
      return <div>Loading...</div>;
    }
  }
}

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  loadHeroes: () => dispatch(loadHeroes()),
  goHeroList: () => dispatch(goHeroList()),
});

const mapStateToProps = (state: IAppState, ownProps: any): IStateProps => {
  return {
    heroes: state.heroes.heroes,
    loading: state.heroes.loading,
    error: state.heroes.error,
    id: state.heroDetail.id,
    history: ownProps.history,
  };
};

export default connect<IStateProps, IDispatchProps, void>(
  mapStateToProps,
  mapDispatchToProps,
)(HeroDetailContainerComponent);
