import React, { Component } from "react";
import moment from "moment-mini";
import { firebase } from "../../../config/firebase.js";
import { navigate, Redirect } from "@reach/router";
import checkUser from "../../CustomFuncs/checkUser";
import {
  cloudName,
  unsignedUploadPreset
} from "../../../config/cloudinaryConfig";

export default class NewPost extends Component {
  state = {
    description: "",
    isUser: false,
    cloudinaryUrl: "",
    thumbnail_url: ""
  };

  componentWillMount() {
    console.log(cloudName);
    checkUser(firebase.auth().currentUser, this);
  }

  handleCloudinary = e => {
    e.preventDefault();
    window.cloudinary.openUploadWidget(
      { cloud_name: `${cloudName}`, upload_preset: `${unsignedUploadPreset}` },
      (error, result) => {
        this.setState({
          cloudinaryUrl: result[0].url,
          thumbnail_url: result[0].thumbnail_url
        });
      }
    );
  };

  formatData = d => d.trim();

  handleSubmit = e => {
    e.preventDefault();
    const userId = firebase.auth().currentUser.uid;
    const data = new FormData(e.target);
    const imgLink = this.state.cloudinaryUrl;
    const thumbnailLink = this.state.thumbnail_url;
    const description = this.formatData(data.get("description"));
    const created = moment.now();
    const createdPretty = moment(created).format();

    this.setState({ description }, async () => {
      // TODO Trim & validate input
      try {
        await firebase
          .database()
          .ref(`users/${userId}/${createdPretty}`)
          .set({
            imgLink,
            thumbnailLink,
            description
          });
        navigate(`/u/${userId}`);
      } catch (err) {
        this.refs.error.textContent = "Hmmmm, that didn't work. Try again?";
      }
    });
  };

  render() {
    const { isUser } = this.state;

    if (!isUser) {
      return <Redirect to="signin" noThrow />;
    } else {
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
            <button
              name="imgUpload"
              className="round-button round-button--upload"
              onClick={this.handleCloudinary}
            >
              Upload Image
            </button>

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
