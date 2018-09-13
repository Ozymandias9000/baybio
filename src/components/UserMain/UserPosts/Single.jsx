import React, { Component } from "react";
import Photo from "./Photo";

class Single extends Component {
  render() {
    const { postid } = this.props;
    // const i = this.props.posts.findIndex(post => post.code === postId);
    // const post = this.props.posts[i];
    // const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        {/* <Photo {...this.props} /> */}
        {/*  <Comments postComments={postComments} {...this.props} /> */}
      </div>
    );
  }
}

export default Single;
