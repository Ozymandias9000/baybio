import React, { Component } from "react";
import { firebase } from "../../../config/firebase";
import moment from "moment-mini";

export default class Comments extends Component {
  state = {
    comments: []
  };
  componentWillMount() {
    this.setState({ comments: this.props.postComments });
  }

  renderComment = (comment, i) => {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.author}</strong>
          {comment.comment}
          {/*  <button
            className="remove-comment"
            onClick={this.props.removeComment.bind(null, postId, i, commentId)}
          >
            &times;
          </button> */}
        </p>
      </div>
    );
  };

  addComment = async (author, comment) => {
    const newComment = { author, comment };

    const { userId } = this.props;
    const { created } = this.props.post;
    const createdPretty = moment(created).format();
    try {
      await firebase
        .database()
        .ref(`/users/${userId}/${createdPretty}`)
        .child("comments")
        .push(newComment);
      this.setState({ comments: [...this.state.comments, newComment] });
    } catch (err) {
      this.refs.author.value = "Oh no!";
      this.refs.comment.value = "Error! Try again?";
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;

    this.refs.commentForm.reset();

    this.addComment(author, comment);
  };

  render() {
    const { comments } = this.state;
    return (
      <div className="comments-container">
        {comments && comments.map(this.renderComment)}

        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={this.handleSubmit}
        >
          <input type="text" ref="author" placeholder="author" required />
          <input type="text" ref="comment" placeholder="comment" required />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}
