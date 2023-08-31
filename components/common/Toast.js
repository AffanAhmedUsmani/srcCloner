import React from "react";
import "./toast.scss";

function Toast({ image, name, subject }) {
  return (
    <div className="toast_main">
      <div className="toast_left">
        <img src={image}></img>
        <div className="toast_left_inner">
          <div>
            <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689696557/Pinlet_Marker_with_Number_ushvbz.png"></img>
            <p>{name}</p>
          </div>
          <p>{subject}</p>
        </div>
      </div>
      <div className="toast_right">
        <button>Book Now</button>
      </div>
    </div>
  );
}

export default Toast;
