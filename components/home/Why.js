import React from "react";
import "./why.scss";

function Why() {
  return (
    <div className="why__main">
      <div className="why_inner">
        <div className="why_inner_left">
          <h1>Why Choose Our Online Tutoring Services?</h1>
          <div className="points_div">
            <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689701358/mdi_star-circle_vwppad.png"></img>
            <p>Receive individualized support from our expert tutors.</p>
          </div>
          <div className="points_div">
            <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689701358/mdi_star-circle_vwppad.png"></img>
            <p>Access tutoring sessions from the comfort of your own home.</p>
          </div>
          <div className="points_div">
            <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689701358/mdi_star-circle_vwppad.png"></img>
            <p>
              {" "}
              Improve your understanding and performance in various subjects.
            </p>
          </div>
          <button>Explore</button>
        </div>
        <div className="why_inner_right"></div>
      </div>
    </div>
  );
}

export default Why;
