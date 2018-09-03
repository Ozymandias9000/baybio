import React, { Component } from "react";
import { Router } from "@reach/router";
import "./static/css/App.css";
import BackgroundLayer from "./components/Background/BackgroundLayer";
import Register from "./components/Register/Register";
import SignIn from "./components/SignIn/SignIn";
import Main from "./components/Main/Main";
import NewPost from "./components/UserMain/NewPost/NewPost";
import NotFound from "./components/NotFound/NotFound";

class App extends Component {
  state = {
    input: "",
    imageUrl: "",
    isSignedIn: true,
    user: {
      email: "",
      id: "",
      name: "",
      babyName: "",
      posts: {},
      joined: ""
    }
  };

  // onInputChange = e => {
  //   this.setState({ input: e.target.value });
  // };

  render() {
    const { isSignedIn } = this.state;
    return (
      <div>
        <BackgroundLayer />
        <Router>
          <NotFound default />
          <Main path="/" isSignedIn={isSignedIn} />
          <NewPost path="/:user/newpost" />
          <Register path="/register" />
          <SignIn path="/signin" />
        </Router>
      </div>
    );
  }
}

export default App;
