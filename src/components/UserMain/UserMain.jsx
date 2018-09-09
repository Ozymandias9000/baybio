import React, { Component } from "react";
import UserPosts from "./UserPosts/UserPosts";
import checkUser from "../CustomFuncs/checkUser";
import { firebase } from "../../config/firebase";
import LinkNewPost from "./LinkNewPost";

export default class UserMain extends Component {
  state = {
    isUser: false,
    userId: ""
  };

  componentWillMount() {
    checkUser(firebase.auth().currentUser, this);
    // This is fragile. Slices out id after '/u/' from path
    const userId = window.location.pathname.slice(3);
    this.setState({ userId });
  }

  render() {
    const { isUser, userId } = this.state;

    return (
      <main className="flex-container--center">
        <UserPosts userId={userId} />
        {isUser && <LinkNewPost />}
      </main>
    );
  }
}
