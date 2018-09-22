import React, { Component } from "react";
import { Link } from "@reach/router";
import textAppear from "../../CustomFuncs/textAppear";

export default class MainSplash extends Component {
  // ! DO NOT SHOW SIGN IN IF SIGNED IN
  // Accepting any creds and taking to user post right now
  componentDidMount() {
    const h1Text = "Baybio";
    const h3Text = "A baby's story";

    const h1Target = document.querySelector(".splash-banner-text--h1");

    const h3Target = document.querySelector(".splash-banner-text--h3");

    textAppear(h1Text, h1Target, 200, 200);
    textAppear(h3Text, h3Target, 100, 2000);
  }

  render() {
    return (
      <main className="flex-container--center">
        <div className="splash-banner-text">
          <h1 className="splash-banner-text--h1"> </h1>
          <h3 className="splash-banner-text--h3"> </h3>
          <div className="splash-button--container">
            <Link to="register" className="round-button round-button--splash">
              Register
            </Link>

            <Link to="signin" className="round-button round-button--splash">
              Sign In
            </Link>
          </div>
          <span>
            <Link to="/u/1u4zqEOhDHfYR7KnMVzadv52C7e2" className="demo-link">
              Demo Page
            </Link>
          </span>
        </div>
      </main>
    );
  }
}
