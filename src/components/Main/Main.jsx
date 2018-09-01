import React, { Component, Fragment } from "react";
import UserMain from "../UserMain/UserMain";

export default class Main extends Component {
  renderSplash = () => {
    return <main className="flex-container--center">Heeeeey, sign in!</main>;
  };

  render() {
    const { isSignedIn } = this.props;
    return (
      <Fragment> {isSignedIn ? <UserMain /> : this.renderSplash()}</Fragment>
    );
  }
}
