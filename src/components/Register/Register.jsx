import React, { Component } from "react";
import textAppear from "../CustomFuncs/textAppear";
import Reg1 from "./RegisterSteps/Reg1";

export default class Register extends Component {
  state = {
    active: false
  };

  /* TODO:
    - Implement multi-component registration flow using Amazon Cognito (https://hackernoon.com/react-authentication-in-depth-4deebda9aa45) & (https://medium.com/@l_e/writing-a-wizard-in-react-8dafbce6db07)
    - Add TransitionGroup page transitions
    - Use Ty McGinnis tut & AWS AppSync with GraphQL to
    serverlessly save user & post data (https://tylermcginnis.com/building-serverless-react-graphql-apps-with-aws-appsync/)
  */

  render() {
    return <Reg1 textAppear={textAppear} />;
  }
}
