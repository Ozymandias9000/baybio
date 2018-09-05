import React, { Component } from "react";
import moment from "moment";
import { firebase } from "../../../config/firebase.js";

export default class NewPost extends Component {
  state = {
    imgLink: "",
    description: "",
    created: 0
  };

  formatData = d => d.trim();

  handleSubmit = e => {
    e.preventDefault();
    const userId = this.props.userId;
    const data = new FormData(e.target);
    const imgLink = this.formatData(data.get("imgLink"));
    const description = this.formatData(data.get("description"));
    const created = moment.now();
    const createdPretty = moment(created).format();
    this.setState({ imgLink, description, created }, () => {
      // TODO Trim & validate input
      // Implement userId from firebase.auth

      firebase
        .database()
        .ref(`users/${userId}/${createdPretty}`)

        .set({
          imgLink,
          description
        });
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
          <label htmlFor="imgLink">Image Link</label>
          <input type="text" name="imgLink" id="imgLink" />
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
