import React, { Component, Fragment } from "react";
import { Link } from "@reach/router";
import UserPosts from "./UserPosts/UserPosts";

export default class UserMain extends Component {
  state = {
    isContent: false,
    user: "test"
  };

  render() {
    const { isContent } = this.state;
    return (
      <main className="flex-container--center">
        {isContent ? <UserPosts /> : <NoContent user={this.state.user} />}
      </main>
    );
  }
}

const NoContent = props => {
  const { user } = props;

  return (
    <Fragment>
      <h3 className="splash-banner-text--h3">
        Nothing here. Make your first post?
      </h3>
      <Link
        to={`u/${user}/newpost`}
        className="round-button round-button--post"
      >
        Please!
      </Link>
    </Fragment>
  );
};
