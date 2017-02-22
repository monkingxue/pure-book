import React, {Component} from "react";
import {Actions, Scene, Router} from "react-native-router-flux";

const scenes = Actions.create(
  <Scene key="root"/>
);

export default class AppRouter extends Component {
  render() {
    return (
      <Router scenes={scenes}/>
    );
  }
}
