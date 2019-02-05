import React, { Component } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import configureStore, { sagaMiddleware } from "./redux/configureStore";
import { initWatchersSaga, startupSaga } from "./sagas/index";
import { isTouchDevice } from "./utils";
import { DeviceContext } from "./contexts";
import { Layout } from "./Layout";

const store = configureStore();
sagaMiddleware
  .run(startupSaga)
  .toPromise()
  .then(() => {
    sagaMiddleware.run(initWatchersSaga);
  });

const history = createBrowserHistory({ basename: "/" });

class App extends Component {
  state = {
    isTouchDevice: false
  };

  componentDidMount() {
    this.setState({ isTouchDevice: isTouchDevice() });
  }

  render() {
    return (
      <DeviceContext.Provider value={{ isTouch: this.state.isTouchDevice }}>
        <ReduxProvider store={store}>
          <Router history={history}>
            <Layout />
          </Router>
        </ReduxProvider>
      </DeviceContext.Provider>
    );
  }
}

export default App;
