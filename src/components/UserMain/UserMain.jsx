import React, { Component } from "react";
import { firebase } from "../../config/firebase";
import { navigate } from "@reach/router";
import UserPosts from "./UserPosts/UserPosts";
import checkUser from "../CustomFuncs/checkUser";
import signOut from "../CustomFuncs/signOut";
import LinkNewPost from "./LinkNewPost";

export default class UserMain extends Component {
  state = {
    isUser: false,
    userId: ""
  };

  register = e => {
    e.preventDefault();
    navigate("/register");
  };

  signIn = e => {
    e.preventDefault();
    navigate("/signin");
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
      <main className="flex-container">
        {/*  {firebase.auth().currentUser !== null ? (
          <div className="auth-buttons--container">
            <button onClick={signOut}>Sign out</button>
          </div>
        ) : (
          <div className="auth-buttons--container">
            <button onClick={this.register}>Register</button>
            <button onClick={this.signIn}>Sign In</button>
          </div>
        )} */}
        <div className="user-main--container">
          <UserPosts userId={userId} />
        </div>
        <div className="user-main--container__button">
          {isUser && <LinkNewPost />}
        </div>
      </main>
    );
  }
}
