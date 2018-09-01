import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import "./static/css/App.css";
import BackgroundLayer from "./components/Background/BackgroundLayer";
import Register from "./components/Register/Register";
import Main from "./components/Main/Main";

class App extends Component {
  state = {
    user: "",
    userId: 0
  };

  render() {
    return (
      <div>
        <BackgroundLayer />
        <Router>
          <Main path="/" />
          <Register path="/register" />
        </Router>
      </div>
    );
  }
}

export default App;
