import React, { Component } from "react";
import formatData from "../CustomFuncs/formatData";
import { firebase } from "../../config/firebase";
import { navigate } from "@reach/router";
// import textAppear from "../CustomFuncs/textAppear";
// import Reg1 from "./RegisterSteps/Reg1";

export default class Register extends Component {
  /* TODO:
    - Implement multi-component registration flow using Amazon Cognito (https://hackernoon.com/react-authentication-in-depth-4deebda9aa45) & (https://medium.com/@l_e/writing-a-wizard-in-react-8dafbce6db07)
    - Add TransitionGroup page transitions
  */

  checkPasswords = (password, passwordConfirm) =>
    password === passwordConfirm ? true : false;

  handleSubmit = async e => {
    e.preventDefault();

    const data = new FormData(e.target);
    const email = formatData(data.get("email"));
    const password = formatData(data.get("password"));
    const passwordConfirm = formatData(data.get("password-confirm"));

    if (!this.checkPasswords(password, passwordConfirm)) {
      this.refs.error.textContent = "Passwords Must be Matching.";
      return;
    } else {
      // input is valid -- reset the error message
      this.refs.error.textContent = "";
    }

    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    const user = firebase.auth().currentUser;

    if (user) {
      navigate(`/u/${user.uid}`);
    } else {
      this.refs.error.textContent = "Please enter a valid email and password!";
    }
  };

  render() {
    return (
      <main>
        <div className="form-container">
          <form
            className="flex-container__space"
            id="reg-form"
            name="reg-form"
            onSubmit={this.handleSubmit}
          >
            <span ref="error" className="error-msg" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
            <label htmlFor="password">Password (6+ Characters)</label>
            <input type="password" name="password" id="password" required />
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              name="password-confirm"
              id="password-confirm"
              required
            />
            <input
              type="submit"
              value="Register"
              className="round-button round-button--register"
            />
          </form>
        </div>
      </main>
    );
  }
}
