import React, { Component } from "react";
import moment from "moment";
import { firebase } from "../../../config/firebase.js";

export default class NewPost extends Component {
  state = {
    imgLink: "",
    description: "",
    userId: "",
    created: 0
  };

  componentDidMount() {
    const userId = this.props.userId;
    this.setState({ userId });
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    const imgLink = data.get("imgLink");
    const description = data.get("description");
    const created = moment.now();
    this.setState({ imgLink, description, created }, () => {
      // TODO Trim & validate input

      firebase
        .database()
        .ref(this.state.userId)
        .set({
          imgLink,
          description,
          created
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
          <textarea name="description" id="description" />
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
