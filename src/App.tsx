import * as React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Switcher from "./Switcher";
import "./App.css";

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Switcher />
      </Provider>
    );
  }
}

export default App;
