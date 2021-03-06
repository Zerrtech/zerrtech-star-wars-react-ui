import "babel-polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";

import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import "open-iconic/font/css/open-iconic-bootstrap.css";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
