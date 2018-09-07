import React, { Component } from "react";
import { firebase } from "../../../config/firebase";

export default class UserPosts extends Component {
  state = {
    posts: []
  };

  fetchPosts = () => {
    const userId = firebase.auth().currentUser.uid;
    // var userId = 1234;
    firebase
      .database()
      .ref("/users/" + userId)
      .once("value")
      .then(snapshot => {
        console.log(snapshot.val());
        this.storePosts(snapshot.val());
      });
  };

  storePosts = p => {
    const posts = [];
    for (let post in p) {
      posts.push(p[post]);
    }
    this.setState({ posts });
  };

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="grid-container--user-main">
        {posts.length > 0 &&
          posts.map(post => (
            <div className="photo-card">
              <img src={post.imgLink} alt={post.description} />
              {post.description}
            </div>
          ))}
      </div>
    );
  }
}
