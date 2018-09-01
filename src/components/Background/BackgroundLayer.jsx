import React, { Component } from "react";
import p5Background from "./p5Background";
import P5Wrapper from "react-p5-wrapper";

export default class BackgroundLayer extends Component {
  render() {
    return (
      <div>
        <P5Wrapper sketch={p5Background} />
      </div>
    );
  }
}
