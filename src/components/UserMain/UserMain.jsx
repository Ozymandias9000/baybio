import React, { Component } from "react";
import { firebase } from "../../config/firebase";
import { navigate, Link } from "@reach/router";

import UserPosts from "./UserPosts/UserPosts";
import checkUser from "../CustomFuncs/checkUser";
import signOut from "../CustomFuncs/signOut";

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
        {isUser ? (
          <div className="auth-buttons--container">
            <button className="new-post-link">
              <Link to={"newpost"}>New Post</Link>
            </button>
            <button onClick={signOut}>Sign out</button>
          </div>
        ) : (
          <div className="auth-buttons--container">
            <button onClick={this.register}>Register</button>
            <button onClick={this.signIn}>Sign In</button>
          </div>
        )}
        <div className="user-main--container">
          <UserPosts userId={userId} />
        </div>
      </main>
    );
  }
}
