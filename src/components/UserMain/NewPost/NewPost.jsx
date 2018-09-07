import React, { Component } from "react";
import moment from "moment-mini";
import { firebase } from "../../../config/firebase.js";
import { navigate } from "@reach/router";

export default class NewPost extends Component {
  state = {
    imgLink: "",
    description: "",
    created: 0
  };

  formatData = d => d.trim();

  handleSubmit = e => {
    e.preventDefault();
    const userId = firebase.auth().currentUser.uid;
    const data = new FormData(e.target);
    const imgLink = this.formatData(data.get("imgLink"));
    const description = this.formatData(data.get("description"));
    const created = moment.now();
    const createdPretty = moment(created).format();
    this.setState({ imgLink, description, created }, async () => {
      // TODO Trim & validate input

      try {
        await firebase
          .database()
          .ref(`users/${userId}/${createdPretty}`)
          .set({
            imgLink,
            description
          });
        navigate(`/u/${userId}`);
      } catch (err) {
        console.log(err);
        this.refs.error.textContent = "Hmmmm, that didn't work. Try again?";
      }
    });
  };

  render() {
    return (
      <div>
        <form
          className="flex-container--center"
          id="post-form"
          name="post-form"
          onSubmit={this.handleSubmit}
        >
          <span ref="error" className="error-msg" />
          <label htmlFor="imgLink">Image Link</label>
          <input type="text" name="imgLink" id="imgLink" required />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Optional"
          />
          <input
            type="submit"
            value="Post"
            className="round-button round-button--submit"
          />
        </form>
      </div>
    );
  }
}
