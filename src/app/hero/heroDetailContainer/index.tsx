import * as React from 'react';
import { connect } from 'react-redux';
import {loadHeroes } from '../api/actions';
import { IAppState } from '../../store/model';
import { IHeroList } from '../model';
import { HeroDetailComponent } from '../heroDetail';

interface DispatchProps {
  loadHeroes: () => void;
}

interface StateProps extends IHeroList {
  id: number;
  history: any;
}

interface HeroDetailContainerComponentProps extends StateProps, DispatchProps {
};

class HeroDetailContainerComponent extends React.Component<HeroDetailContainerComponentProps, {}> {

  constructor() {
    super();
  }

  componentDidMount() {
    this.props.loadHeroes();
  }

  onClose() {
    this.props.history.push('/');
  }

  render() {
    const {
      heroes,
      id
    } = this.props;
    const matches = heroes.filter(hero => hero.id === id);
    const matchingHero = matches[0];
    if (matchingHero) {
      return (
        <HeroDetailComponent hero={matchingHero} onClose={() => this.onClose()}></HeroDetailComponent>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
}

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  loadHeroes: () => dispatch(loadHeroes())
});

const mapStateToProps = (state:IAppState, ownProps:any): StateProps => {
  return {
    heroes: state.heroes.heroes,
    loading: state.heroes.loading,
    error: state.heroes.error,
    id: parseInt(ownProps.match.params.id),
    history: ownProps.history
  };
};

export default connect<StateProps, DispatchProps, void>(mapStateToProps, mapDispatchToProps)(HeroDetailContainerComponent);
