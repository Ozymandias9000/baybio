import React, { Component } from "react";
import Photo from "./Photo";

class Single extends Component {
  render() {
    const { post } = this.props.location.state;
    return (
      <div className="flex-container--center">
        <div className="single-content--container">
          <div className="single-photo-and-caption--container">
            <img src={post.imgLink} alt={post.description} />
            <p>{post.description}</p>
          </div>
          {/*   <div className="comments--container">

          </div> */}
        </div>
      </div>
    );
  }
}

export default Single;
