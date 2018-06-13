import * as React from 'react';
import { connect } from 'react-redux';
import { loadHeroes } from '../api/actions';
import { IHero, IHeroList } from '../model';
import { IAppState } from '../../store/model';
import { HeroListComponent } from '../heroList';
import { withRouter } from 'react-router-dom'

const sortHeroes = (heroList: IHero[]) =>
  heroList.sort((a, b) => {
    return b.power < a.power ? -1 : 1;
  });

interface AppProps {
  loadHeroes: () => void;
}

interface StateProps extends IHeroList {
  history: any;
}

interface HeroListContainerComponentProps extends StateProps, AppProps {
}

class HeroListContainerComponent extends React.Component<HeroListContainerComponentProps, {}> {

  changeHero(hero: IHero) {
    this.props.history.push('/hero/' + hero.id);
  }

  componentDidMount() {
    this.props.loadHeroes();
  }

  render() {
    const {
      heroes
    } = this.props;
    const sortedHeroes = sortHeroes(heroes);
    return (
      <HeroListComponent heroes={sortedHeroes} onSelect={(hero) => this.changeHero(hero)}></HeroListComponent>
    );
  }
}

const mapDispatchToProps = (dispatch: any): AppProps => ({
  loadHeroes: () => dispatch(loadHeroes())
});

const mapStateToProps = (state:IAppState, ownProps:any): StateProps => {
  return {
    heroes: state.heroes.heroes,
    loading: state.heroes.loading,
    error: state.heroes.error,
    history: ownProps.history
  };
};

export default withRouter(connect<StateProps, AppProps, void>(mapStateToProps, mapDispatchToProps)(HeroListContainerComponent));
