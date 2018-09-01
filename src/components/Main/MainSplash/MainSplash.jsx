import React, { Component } from "react";
import { Link } from "@reach/router";

export default class MainSplash extends Component {
  render() {
    return (
      <main className="flex-container--center">
        <div className="splash-banner-text">
          <h1 className="splash-banner-text--h1">Baybio</h1>
          <div className="splash-link--container">
            <Link to="register" className="splash-link">
              Register
            </Link>
            <Link to="signin" className="splash-link">
              Sign In
            </Link>
          </div>
        </div>
      </main>
    );
  }
}
