import React, { Component } from "react";

export default class Photo extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="photo-card" key={post.imgLink}>
        <img src={post.imgLink} alt={post.description} />
        {post.description}
      </div>
    );
  }
}
