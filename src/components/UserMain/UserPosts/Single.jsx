import React, { Component } from "react";
import Comments from "./Comments";

export default class Single extends Component {
  render() {
    const { post } = this.props.location.state;
    post.comments = [
      { user: "Nick", text: "Nice!" },
      { user: "Jim Bob", text: "Way to go!" },
      { user: "Nick", text: "Nice!" },
      { user: "Jim Bob", text: "Way to go!" },
      { user: "Nick", text: "Nice!" },
      { user: "Jim Bob", text: "Way to go!" },
      { user: "Nick", text: "Nice!" },
      { user: "Jim Bob", text: "Way to go!" }
    ];
    return (
      <div className="single-content--container">
        <div className="single-photo-and-caption--container">
          <figure>
            <img src={post.imgLink} alt={post.description} />
            <figcaption>
              <p>{post.description}</p>
            </figcaption>
          </figure>
        </div>
        <Comments postComments={post.comments} />
      </div>
    );
  }
}
