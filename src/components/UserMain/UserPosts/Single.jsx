import React, { Component } from "react";
import Photo from "./Photo";

class Single extends Component {
  render() {
    const { post } = this.props.location.state;

    console.log(post);
    return (
      <div className="flex-container--center">
        <div className="single-photo--container">
          <div>
            <img src={post.imgLink} alt={post.description} />
          </div>
          <div className="comments--container">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat hic
            blanditiis ullam, sequi deserunt nihil quod alias tempore inventore
            veritatis nulla illum ea magni, enim magnam dolorum totam atque
            temporibus?
          </div>
        </div>
      </div>
    );
  }
}

export default Single;
