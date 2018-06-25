import * as React from "react";
import { connect } from "react-redux";
import HeroListContainerComponent from "./HeroListContainer";
import HeroDetailContainerComponent from "./HeroDetailContainer";
import CallbackComponent from './Callback';
import Header from './Header';
import { ACTIONS } from "./page";

const components = {
  [ACTIONS.HERO_LIST]: HeroListContainerComponent,
  [ACTIONS.HERO_DETAIL]: HeroDetailContainerComponent,
  [ACTIONS.AUTH0_CALLBACK]: CallbackComponent,
};

const Switcher = (props: any) => {
  const Component = components[props.page];
  return (
    <div className="app-container">
      <Header />
      <Component />
    </div>
  );
};

const mapState = (state: any) => ({
  page: state.page,
  auth: state.auth,
});

export default connect(mapState)(Switcher);
