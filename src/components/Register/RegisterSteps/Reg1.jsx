import React, { Component } from "react";
import SingleLineInput from "../../Inputs/SingleLineInput";

export default class Reg1 extends Component {
  state = {
    active: false
  };

  componentDidMount() {
    const { textAppear } = this.props;
    const h1Text = "Hello, baby";
    const ellipses = "...";
    const h3Text = "What's your name?";

    const h1Target = document.querySelector(".splash-banner-text--h1");
    const ellipsesTarget = document.querySelector(
      ".splash-banner-text--ellipses"
    );
    const h3Target = document.querySelector(".splash-banner-text--h3");

    textAppear(h1Text, h1Target, 100, 500);
    textAppear(ellipses, ellipsesTarget, 200, 2500);
    textAppear(h3Text, h3Target, 50, 3500);

    setTimeout(() => {
      this.setState({ active: !this.state.active });
    }, 4500);
  }

  render() {
    return (
      <main className="flex-container--center">
        <div className="splash-banner-text">
          <h1 className="splash-banner-text--h1"> </h1>
          <h3 className="splash-banner-text--ellipses"> </h3>
          <h3 className="splash-banner-text--h3"> </h3>
          {this.state.active && <SingleLineInput label={"babyName"} />}
        </div>
      </main>
    );
  }
}
