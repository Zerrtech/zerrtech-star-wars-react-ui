import * as React from "react";

import Switcher from "../Switcher";
import "./Layout.css";
import Header from "../Header";

const Layout = (props: any) => (
  <div className="container">
    <Header />
    <Switcher />
  </div>
);

export default Layout;
