import React, { Component } from "react";

export default class Photo extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="photo-card" key={post.imgLink}>
        <div className="photo-card--image-container">
          <img src={post.imgLink} alt={post.description} />
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
