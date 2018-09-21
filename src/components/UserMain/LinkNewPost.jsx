import React, { Component, Fragment } from "react";
import { Link } from "@reach/router";

export default class LinkNewPost extends Component {
  render() {
    return (
      <Fragment>
        <Link to={`newpost`} className="round-button--post">
          New Post
        </Link>
      </Fragment>
    );
  }
}
