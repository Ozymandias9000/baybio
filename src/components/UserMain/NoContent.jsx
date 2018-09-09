import React, { Component, Fragment } from "react";

export default class NoContent extends Component {
  render() {
    return (
      <Fragment>
        <h3 className="splash-banner-text--h3">
          Nothing here! Either this user doesn't exist, or they haven't uploaded
          any content!
        </h3>
      </Fragment>
    );
  }
}
