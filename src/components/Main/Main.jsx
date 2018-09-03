import React, { Component, Fragment } from "react";
import UserMain from "../UserMain/UserMain";
import MainSplash from "./MainSplash/MainSplash";

export default class Main extends Component {
  render() {
    const { isSignedIn } = this.props;

    return <Fragment> {isSignedIn ? <UserMain /> : <MainSplash />}</Fragment>;
  }
}
