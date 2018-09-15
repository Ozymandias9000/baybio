import React, { Component } from "react";
import moment from "moment-mini";
import { firebase } from "../../../config/firebase.js";
import { navigate, Redirect } from "@reach/router";
import shortid from "shortid";

import formatData from "../../CustomFuncs/formatData";
import checkUser from "../../CustomFuncs/checkUser";
import makeHTTPS from "../../CustomFuncs/makeHTTPS";
import {
  cloudName,
  unsignedUploadPreset
} from "../../../config/cloudinaryConfig";

export default class NewPost extends Component {
  state = {
    description: "",
    isUser: false,
    cloudinaryUrl: "",
    thumbnail_url: "",
    shortid: ""
  };

  componentWillMount() {
    checkUser(firebase.auth().currentUser, this);
  }

  handleCloudinary = e => {
    e.preventDefault();
    window.cloudinary.openUploadWidget(
      {
        cloud_name: `${cloudName}`,
        upload_preset: `${unsignedUploadPreset}`,
        folder: "baybio",
        theme: "white"
      },
      (error, result) => {
        if (error) {
          this.refs.error.textContent = "Hmmmm, no photo here. Try again?";
          return;
        } else {
          const cloudinaryUrl = makeHTTPS(result[0].url);
          const thumbnail_url = makeHTTPS(result[0].thumbnail_url);

          this.setState(
            {
              cloudinaryUrl,
              thumbnail_url,
              shortid: shortid.generate()
            },
            () => (this.refs.error.textContent = "Photo ready!")
          );
        }
      }
    );
  };

  handleSubmit = e => {
    e.preventDefault();

    const imgLink = this.state.cloudinaryUrl;
    if (imgLink === "") {
      this.refs.error.textContent = "You must provide a picture!";
      return;
    }

    const userId = firebase.auth().currentUser.uid;
    const data = new FormData(e.target);
    const thumbnailLink = this.state.thumbnail_url;
    const { shortid } = this.state;
    const description = formatData(data.get("description"));
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
            description,
            created,
            shortid
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
            <textarea name="description" id="description" required />
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
