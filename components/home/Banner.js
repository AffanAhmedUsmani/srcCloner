import React from "react";
import "./banner.scss";

function Banner() {
  return (
    <div className="banner_wrapper">
      <div className="banner_main">
        <div className="banner_left">
          <button>Never stop learning</button>
          <p>
            Unlock Your Full Potential with Personalized Tutoring at OnTutoring
          </p>
          <div className="banner_left_inner">
            <button>Explore</button>
            <div className="banner_inner_image_div">
              <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689693418/Button_mdpiti.png"></img>
            </div>
          </div>
        </div>
        <div className="banner_right">
          <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689694375/Group_9_dvxv3j.png"></img>
          <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689694116/Group_7_a1qajk.png"></img>
        </div>
      </div>
    </div>
  );
}

export default Banner;
