import * as React from "react";
import { connect } from "react-redux";
import HeroListContainerComponent from "./HeroListContainer";
import HeroDetailContainerComponent from "./HeroDetailContainer";
import CallbackComponent from './Callback';
import Header from './Header';
import { ACTIONS } from "./page";
import { checkLoggedIn } from "./utils";
import { IAppState, IAuth0 } from "./models";

const components = {
  [ACTIONS.HERO_LIST]: HeroListContainerComponent,
  [ACTIONS.HERO_DETAIL]: HeroDetailContainerComponent,
  [ACTIONS.AUTH0_CALLBACK]: CallbackComponent,
};

interface ISwitcherProps {
  page: string,
  auth: IAuth0,
}

const Switcher = (props: ISwitcherProps) => {
  const loggedIn = checkLoggedIn(props.auth);
  const isCallback = props.page === ACTIONS.AUTH0_CALLBACK;
  const Component = components[props.page];
  return (
    <div className="app-container">
      <Header />
      {(loggedIn || isCallback) &&
        <Component />
      }
    </div>
  );
};

const mapState = (state: IAppState) => ({
  page: state.page,
  auth: state.auth.auth,
});

export default connect(mapState)(Switcher);
