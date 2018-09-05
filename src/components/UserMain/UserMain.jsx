import React, { Component, Fragment } from "react";
import { Link } from "@reach/router";
import UserPosts from "./UserPosts/UserPosts";

export default class UserMain extends Component {
  state = {
    isContent: false,
    userId: 1234
  };

  render() {
    const { isContent } = this.state;
    return (
      <main className="flex-container--center">
        {isContent ? <UserPosts /> : <NoContent userId={this.state.userId} />}
      </main>
    );
  }
}

const NoContent = props => {
  const { userId } = props;

  return (
    <Fragment>
      <h3 className="splash-banner-text--h3">
        Nothing here. Make your first post?
      </h3>
      <Link
        to={`u/${userId}/newpost`}
        className="round-button round-button--post"
      >
        Please!
      </Link>
    </Fragment>
  );
};
