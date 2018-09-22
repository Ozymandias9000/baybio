import React, { Component } from "react";
import { firebase } from "../../../config/firebase";
import NoContent from "../NoContent";
import Loading from "../../Loading/Loading";
import Photo from "./Photo";

export default class UserPosts extends Component {
  state = {
    posts: [],
    isContent: true,
    loading: true
  };

  fetchPosts = () => {
    firebase
      .database()
      .ref("/users/" + this.props.userId)
      .once("value")
      .then(snapshot => {
        this.storePosts(snapshot.val());
      });
  };

  storePosts = p => {
    const posts = [];
    for (let post in p) {
      posts.push(p[post]);
    }
    posts.reverse();
    posts.length === 0
      ? this.setState({ isContent: false, loading: false })
      : this.setState({ isContent: true, loading: false, posts });
  };

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    const { posts, isContent, loading } = this.state;
    const { userId } = this.props;
    if (loading) return <Loading />;

    return !isContent ? (
      <NoContent />
    ) : (
      <div className="grid-container--user-main">
        {posts.length > 0 &&
          posts.map(post => (
            <Photo key={post.imgLink} post={post} userId={userId} />
          ))}
      </div>
    );
  }
}
