import React, { Component, Fragment } from "react";
import { Link } from "@reach/router";
import UserPosts from "./UserPosts/UserPosts";
import { firebase } from "../../config/firebase";
import { navigate } from "@reach/router";

export default class UserMain extends Component {
  state = {
    isContent: false,
    isUser: false,
    userId: null
  };

  checkUser = () => {
    if (firebase.auth().currentUser === null) {
      this.setState({ isUser: false, isContent: false, userId: null });
    } else {
      const { uid } = firebase.auth().currentUser;
      this.setState({ isUser: true, isContent: true, userId: uid });
    }
  };

  componentWillMount() {
    this.checkUser();
  }

  render() {
    const { isContent, isUser, userId } = this.state;

    if (!isUser) {
      navigate("/signin");
      return null;
    } else {
      return (
        <main className="flex-container--center">
          {isContent ? <UserPosts /> : <NoContent userId={userId} />}
        </main>
      );
    }
  }
}

const NoContent = () => {
  const { userId } = this.state;

  return (
    <Fragment>
      <h3 className="splash-banner-text--h3">
        Nothing here. Make your first post?
      </h3>
      <Link
        to={`/u/${userId}/newpost`}
        className="round-button round-button--post"
      >
        Please!
      </Link>
    </Fragment>
  );
};
