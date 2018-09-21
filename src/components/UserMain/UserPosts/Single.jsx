import React, { Component } from "react";
import Comments from "./Comments";

export default class Single extends Component {
  render() {
    const { post } = this.props.location.state;
    // const comments = [
    //   { user: "Nick", text: "Nice!" },
    //   { user: "Jim Bob", text: "Way to go!" },
    //   { user: "Nick", text: "Nice!" },
    //   { user: "Jim Bob", text: "Way to go!" },
    //   { user: "Nick", text: "Nice!" },
    //   { user: "Jim Bob", text: "Way to go!" },
    //   { user: "Nick", text: "Nice!" },
    //   { user: "Jim Bob", text: "Way to go!" }
    // ];
    const { comments } = post;
    const commentsArr = comments === undefined ? [] : Object.values(comments);

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
        <Comments
          postComments={commentsArr}
          {...this.props.location.state}
          {...this.props}
        />
      </div>
    );
  }
}
