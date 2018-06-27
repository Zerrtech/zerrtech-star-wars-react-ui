import * as React from "react";
import { connect } from "react-redux";
import { loadHeroes } from "./actions";
import { IHero, IHeroList } from "../models";
import { IAppState } from "../models";
import HeroListComponent from "./HeroList";
import { goHeroList } from "../page";
import SquadListComponent, {
  addedToSquad,
  removedFromSquad,
} from "./SquadList";
import Error from "../Error";

const sortHeroesByPower = (heroList: IHero[]) =>
  heroList.sort((a, b) => {
    return b.power < a.power ? -1 : 1;
  });
const filterHeroesByForce = (heroList: IHero[], filter: string) => {
  if (filter === "All") {
    return heroList;
  }
  return heroList.filter(
    (hero) =>
      (filter === "Light" && hero.light === true) ||
      (filter === "Dark" && hero.light === false),
  );
};

const filterHeroesBySquad = (heroList: IHero[], filter: number[]) => {
  return heroList.filter((hero) => !filter.includes(hero.id));
};

interface IAppProps {
  loadHeroes: () => void;
  addedToSquad: (id: number) => void;
  removedFromSquad: (id: number) => void;
  goHeroList: () => void;
}

interface IStateProps extends IHeroList {
  history: any;
  squad: number[];
}

interface IHeroListContainerComponentProps extends IStateProps, IAppProps {}
interface IHeroListContainerComponentState {
  forceFilter: string;
}

class HeroListContainerComponent extends React.Component<
  IHeroListContainerComponentProps,
  IHeroListContainerComponentState
> {
  public constructor(props: IHeroListContainerComponentProps) {
    super(props);

    this.state = {
      forceFilter: "All",
    };
  }
  public componentDidMount() {
    if (this.props.heroes.length === 0) {
      this.props.loadHeroes();
    }
  }

  public render() {
    const { heroes, squad, errorObj } = this.props;
    if (errorObj) {
      return <Error error={errorObj} />;
    }
    const sortedHeroes = sortHeroesByPower(heroes);
    const squadHeroes = heroes.filter((hero) => squad.includes(hero.id));
    const squadHeroesOrderAdded = squadHeroes.sort(
      (a, b) => (squad.indexOf(a.id) < squad.indexOf(b.id) ? -1 : 1),
    );
    const filteredHeroes = filterHeroesByForce(
      sortedHeroes,
      this.state.forceFilter,
    );
    const availableHeroes = filterHeroesBySquad(filteredHeroes, squad);
    return (
      <div className="row">
        <HeroListComponent
          heroes={availableHeroes}
          forceFilter={this.state.forceFilter}
          onFilterChange={this.onFilterChange}
          addToSquad={this.addToSquad}
          refresh={this.refresh}
        />
        <SquadListComponent
          heroes={squadHeroesOrderAdded}
          removeFromSquad={this.removeFromSquad}
        />
      </div>
    );
  }
  private onFilterChange = (val: string) => {
    this.setState({ forceFilter: val });
  };

  private addToSquad = (id: number) => {
    this.props.addedToSquad(id);
  };

  private removeFromSquad = (id: number) => {
    this.props.removedFromSquad(id);
  };

  private refresh = () => {
    this.props.loadHeroes();
  };
}
const mapDispatchToProps = (dispatch: any): IAppProps => ({
  loadHeroes: () => dispatch(loadHeroes()),
  addedToSquad: (id: number) => dispatch(addedToSquad(id)),
  removedFromSquad: (id: number) => dispatch(removedFromSquad(id)),
  goHeroList: () => dispatch(goHeroList()),
});

const mapStateToProps = (state: IAppState, ownProps: any): IStateProps => {
  return {
    heroes: state.heroes.heroes,
    loading: state.heroes.loading,
    error: state.heroes.error,
    errorObj: state.heroes.errorObj,
    history: ownProps.history,
    squad: state.squadList,
  };
};

export default connect<IStateProps, IAppProps, void>(
  mapStateToProps,
  mapDispatchToProps,
)(HeroListContainerComponent);
