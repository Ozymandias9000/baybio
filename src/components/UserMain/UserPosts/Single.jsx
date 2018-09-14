import React, { Component } from "react";
import Photo from "./Photo";

class Single extends Component {
  render() {
    const { post } = this.props.location.state;
    // const i = this.props.posts.findIndex(post => post.code === postId);
    // const post = this.props.posts[i];
    // const postComments = this.props.comments[postId] || [];
    console.log(post);
    return (
      <div className="single-photo">
        <img src={post.imgLink} alt={post.description} />
        {/* <Photo {...this.props} /> */}
        {/*  <Comments postComments={postComments} {...this.props} /> */}
      </div>
    );
  }
}

export default Single;
