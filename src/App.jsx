import React, { Component } from "react";
import { Router } from "@reach/router";
import "./static/css/App.css";
import BackgroundLayer from "./components/Background/BackgroundLayer";
import Register from "./components/Register/Register";
import Main from "./components/Main/Main";

class App extends Component {
  state = {
    input: "",
    imageUrl: "",
    isSignedIn: false,
    user: {
      email: "",
      id: "",
      name: "",
      babyName: "",
      posts: {},
      joined: ""
    }
  };

  onInputChange = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { isSignedIn } = this.state;
    return (
      <div>
        <BackgroundLayer />
        <Router>
          <Main path="/" isSignedIn={isSignedIn} />
          <Register path="/register" />
        </Router>
      </div>
    );
  }
}

export default App;
