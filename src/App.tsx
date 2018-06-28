import * as React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Layout from "./Layout";
import "./App.css";

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}

export default App;
