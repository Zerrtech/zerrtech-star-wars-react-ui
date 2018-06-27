import * as React from "react";
import { connect } from "react-redux";
import Switcher from "../Switcher";
import "./Layout.css";
import { IAppState } from "../models";

const Layout = (props: any) => (
  <div className="container">
    <div className="row title-container">
      <h1>{props.page === "HERO_LIST" ? "List Page" : "Detail View"}</h1>
    </div>
    <Switcher />
  </div>
);

const mapStateToProps = (state: IAppState) => ({
  page: state.page,
});

export default connect(mapStateToProps)(Layout);
