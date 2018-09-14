import React, { Component } from "react";
import { Router, navigate } from "@reach/router";
import Single from "./Single";

export default class Photo extends Component {
  handleClick = (post, shortid, userId) => {
    navigate(`/u/${userId}/${shortid}`, { state: { post } });
  };

  render() {
    const { post, userId } = this.props;

    const { shortid } = post;
    return (
      <div className="photo-card" key={post.imgLink}>
        <div className="photo-card--image-container">
          <img
            src={post.imgLink}
            alt={post.description}
            onClick={() => this.handleClick(post, shortid, userId)}
          />
        </div>
        <div className="photo-card--description-container">
          <p>
            {post.description.length > 18
              ? post.description.slice(0, 15).concat("...")
              : post.description}
          </p>
        </div>
      </div>
    );
  }
}
