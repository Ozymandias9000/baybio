import React, { Component, Fragment } from "react";
import { Link } from "@reach/router";

export default class LinkNewPost extends Component {
  render() {
    return (
      <Fragment>
        <Link to={`newpost`} className="new-post-link">
          New Post
        </Link>
      </Fragment>
    );
  }
}
