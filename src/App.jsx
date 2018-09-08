import React, { Component } from "react";
import { Router } from "@reach/router";
import "./static/css/App.css";
import BackgroundLayer from "./components/Background/BackgroundLayer";
import Register from "./components/Register/Register";
import SignIn from "./components/SignIn/SignIn";
import NewPost from "./components/UserMain/NewPost/NewPost";
import NotFound from "./components/NotFound/NotFound";
import UserMain from "./components/UserMain/UserMain";
import MainSplash from "./components/Main/MainSplash/MainSplash";

class App extends Component {
  // state = {
  //   input: "",
  //   imageUrl: "",
  //   isSignedIn: true,
  //   user: {
  //     email: "",
  //     userId: "123",
  //     name: "",
  //     babyName: "",
  //     posts: {},
  //     joined: ""
  //   }
  // };

  componentDidMount() {
    // let isSignedIn;
    // firebase.auth().currentUser ? (isSignedIn = true) : (isSignedIn = false);
    // console.log(firebase.auth().currentUser, this.state);
    // this.setState({ isSignedIn });
    // Still need to make this update issignedin
    // Also userId
  }

  render() {
    // const { isSignedIn } = this.state;
    return (
      <div>
        <BackgroundLayer />
        <Router>
          <NotFound default />
          <MainSplash path="/" />
          <UserMain path="/u/:userId" />
          <NewPost path="/u/:userId/newpost" />
          <Register path="/register" />
          <SignIn path="/signin" />
        </Router>
      </div>
    );
  }
}

export default App;
