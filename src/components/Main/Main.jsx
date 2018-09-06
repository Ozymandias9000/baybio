import React, { Component, Fragment } from "react";

export default class Main extends Component {
  render() {
    const { isSignedIn } = this.props;

    return <Fragment> {isSignedIn ? : }</Fragment>;
  }
}
