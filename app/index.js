import React, {Component} from "react";
import {Actions, Scene, Router} from "react-native-router-flux";

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
    <Router scenes={scenes}/>
  );
};
