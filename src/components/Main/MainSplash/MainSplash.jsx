import React, { Component } from "react";
import { Link } from "@reach/router";

export default class MainSplash extends Component {
  render() {
    return (
      <main className="flex-container--center">
        <div className="splash-banner-text">
          <h1 className="splash-banner-text--h1">Baybio</h1>
          <h3 className="splash-banner-text--h3">Your baby's story</h3>
          <div className="splash-button--container">
            <Link to="register" className="round-button round-button--splash">
              Register
            </Link>
            <Link to="signin" className="round-button round-button--splash">
              Sign In
            </Link>
          </div>
        </div>
      </main>
    );
  }
}
