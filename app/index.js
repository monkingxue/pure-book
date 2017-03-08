import React from "react";
import {Provider} from "react-redux";
import {Actions, Scene, Router} from "react-native-router-flux";

import {store} from "./store";

import Home from "./pages/home";

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="home"
           hideNavBar={true}
           component={Home}/>
  </Scene>
);

export default () => {
  return (
    <Provider store={store}>
      <Router scenes={scenes}/>
    </Provider>
  );
};
