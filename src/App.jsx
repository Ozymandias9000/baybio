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
import MaevePage from "./components/MaevePage/MaevePage";

class App extends Component {
  render() {
    return (
      <div>
        <BackgroundLayer />
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
