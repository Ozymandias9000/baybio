import { firebase } from "../../config/firebase";
import React, { Component } from "react";
import { navigate } from "@reach/router";
import formatData from "../CustomFuncs/formatData";

export default class SignIn extends Component {
  handleSubmit = async e => {
    e.preventDefault();

    const data = new FormData(e.target);
    const email = formatData(data.get("email"));
    const password = formatData(data.get("password"));

    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
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
            id="signin-form"
            name="signin-form"
            onSubmit={this.handleSubmit}
          >
            <span ref="error" className="error-msg" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
            <div>
              <input
                type="submit"
                value="Sign In"
                className="round-button round-button--sign-in"
              />
            </div>
          </form>
        </div>
      </main>
    );
  }
}
