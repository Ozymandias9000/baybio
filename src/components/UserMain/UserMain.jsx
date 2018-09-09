import React, { Component, Fragment } from "react";
import { Link, Redirect } from "@reach/router";
import UserPosts from "./UserPosts/UserPosts";
import checkUser from "../CustomFuncs/checkUser";
import { firebase } from "../../config/firebase";

export default class UserMain extends Component {
  state = {
    isContent: true,
    isUser: false,
    userId: ""
  };

  componentWillMount() {
    checkUser(firebase.auth().currentUser, this);
  }

  render() {
    const { isContent, isUser } = this.state;

    if (!isUser) {
      return <Redirect to="signin" noThrow />;
    } else {
      return (
        <main className="flex-container--center">
          {isContent ? <UserPosts /> : <NoContent />}
          <Link to={`newpost`} className="round-button round-button--post">
            New Post
          </Link>
        </main>
      );
    }
  }
}

const NoContent = () => {
  return (
    <Fragment>
      <h3 className="splash-banner-text--h3">Nothing here!</h3>
    </Fragment>
  );
};
