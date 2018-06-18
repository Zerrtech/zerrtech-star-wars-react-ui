import * as React from "react";
import { connect } from "react-redux";
import HeroListContainerComponent from "./HeroListContainer";
import HeroDetailContainerComponent from "./HeroDetailContainer";
import { ACTIONS } from "./page";

const components = {
  [ACTIONS.HERO_LIST]: HeroListContainerComponent,
  [ACTIONS.HERO_DETAIL]: HeroDetailContainerComponent
};

const Switcher = (props: any) => {
  const Component = components[props.page];
  return <Component />;
};

const mapState = (state: any) => ({
  page: state.page
});

export default connect(mapState)(Switcher);
