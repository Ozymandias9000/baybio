import React, { Component } from "react";
import moment from "moment-mini";
import { firebase } from "../../../config/firebase.js";
import { navigate, Redirect } from "@reach/router";
import checkUser from "../../CustomFuncs/checkUser";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";

export default class NewPost extends Component {
  state = {
    imgLink: "",
    description: "",
    created: 0,
    isUser: false
  };

  componentWillMount() {
    checkUser(firebase.auth().currentUser, this);
  }

  formatData = d => d.trim();

  handleSubmit = e => {
    // TODO Checkout filepond
    // https://github.com/pqina/filepond
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
    const { isUser } = this.state;

    if (!isUser) {
      //   return <Redirect to="signin" noThrow />;
      // } else {
      return (
        <div>
          <form
            className="flex-container"
            id="post-form"
            name="post-form"
            onSubmit={this.handleSubmit}
          >
            <span ref="error" className="error-msg" />
            <label htmlFor="imgUpload">Image Upload</label>
            <FilePond
              name="imgUpload"
              id="imgUpload"
              style={{
                height: 50 + `px`,
                width: 75 + "vw"
              }}
            />
            <label htmlFor="imgLink">Image Link</label>
            <input type="text" name="imgLink" id="imgLink" />
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              placeholder="Optional"
            />
            <div>
              <input
                type="submit"
                value="Post"
                className="round-button round-button--post"
              />
            </div>
          </form>
        </div>
      );
    }
  }
}
