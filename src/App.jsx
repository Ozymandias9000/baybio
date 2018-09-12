import React, { Component } from "react";
import { Router } from "@reach/router";
import signOut from "./components/CustomFuncs/signOut";
import "./static/css/App.css";

// Needed on Main Page
import BackgroundLayer from "./components/Background/BackgroundLayer";
import MainSplash from "./components/Main/MainSplash/MainSplash";

// Using react-loadable to code-split
import {
  NotFound,
  UserMain,
  NewPost,
  Register,
  SignIn,
  MaevePage
} from "./AsyncComponents";

class App extends Component {
  render() {
    return (
      <div>
        <BackgroundLayer />
        <button onClick={signOut}>Sign out</button>
        <Router>
          <NotFound default />
          <MainSplash path="/" />
          <UserMain path="/u/:userId" />
          <MaevePage path="/maeve" />
          <NewPost path="/u/:userId/newpost" />
          <Register path="/register" />
          <SignIn path="/signin" />
        </Router>
      </div>
    );
  }
}

export default App;
