import React, { Component } from "react";
import Particles from "react-particles-js";

export default class BackgroundLayer extends Component {
  render() {
    return (
      <Particles
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 1000
              }
            },
            color: {
              value: ["#6495ED", "#FFC0CB"]
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: false
              }
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: false
              }
            },
            move: {
              speed: 1.5,
              random: true,
              direction: "bottom",
              out_mode: "out"
            },
            line_linked: {
              enable: false
            }
          }
        }}
        className={"background-layer"}
        width={"100vw"}
        height={"100vh"}
      />
    );
  }
}
