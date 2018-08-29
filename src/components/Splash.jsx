import React, { Component } from "react";
import p5Background from "./p5Background";
import P5Wrapper from "react-p5-wrapper";

export default class Splash extends Component {
  state = {
    active: false
  };

  componentDidMount() {
    const h1Text = "Hello, baby";
    const ellipses = "...";
    const h3Text = "What's your name?";

    const h1Target = document.querySelector(".splash-banner-text--h1");
    const ellipsesTarget = document.querySelector(
      ".splash-banner-text--ellipses"
    );
    const h3Target = document.querySelector(".splash-banner-text--h3");

    const textAppear = function(
      text,
      domTarget,
      timeBetween = 150,
      initialDelay = 0
    ) {
      let arr = text.split("");
      for (let i = 0; i < arr.length; i++) {
        setTimeout(function() {
          let span = document.createElement("span");
          span.innerText += arr[i];
          span.classList.add("textAppear");
          domTarget.appendChild(span);
        }, initialDelay + i * timeBetween);
      }
    };

    textAppear(h1Text, h1Target, 150, 500);
    textAppear(ellipses, ellipsesTarget, 200, 2500);
    textAppear(h3Text, h3Target, 50, 3500);

    setTimeout(() => {
      this.setState({ active: !this.state.active });
    }, 4500);
  }

  render() {
    return (
      <div>
        <P5Wrapper sketch={p5Background} />
        <main className="splash-main-container">
          <div className="splash-banner-text">
            <h1 className="splash-banner-text--h1" />
            <h3 className="splash-banner-text--ellipses" />
            <h3 className="splash-banner-text--h3" />
            {this.state.active && <NameInput />}
          </div>
        </main>
      </div>
    );
  }
}

const NameInput = () => <input type="text" id="name-input" />;
