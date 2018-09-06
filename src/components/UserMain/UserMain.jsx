import React, { Component, Fragment } from "react";
import { Link } from "@reach/router";
import UserPosts from "./UserPosts/UserPosts";
import { firebase } from "../../config/firebase";
import { Redirect } from "@reach/router";

export default class UserMain extends Component {
  state = {
    isContent: false,
    isUser: false,
    userId: ""
  };

  checkUser = () => {
    if (
      firebase.auth().currentUser === null ||
      firebase.auth().currentUser.uid !== this.props.userId
    ) {
      this.setState({ isUser: false, isContent: false, userId: "" });
    } else {
      const { userId } = this.props;
      this.setState({ isUser: true, isContent: false, userId });
    }
    console.log(this.props, firebase.auth().currentUser);
  };

  componentWillMount() {
    this.checkUser();
  }

  render() {
    const { isContent, isUser, userId } = this.state;

    if (!isUser) {
      return <Redirect to="signin" noThrow />;
    } else {
      return (
        <main className="flex-container--center">
          {isContent ? <UserPosts /> : <NoContent userId={userId} />}
        </main>
      );
    }
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
        to={`/u/${userId}/newpost`}
        className="round-button round-button--post"
      >
        Please!
      </Link>
    </Fragment>
  );
};
