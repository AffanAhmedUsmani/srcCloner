import React from "react";
import "./nav2.scss";

function Nav2() {
  const navigateToHome = () => {
    window.location.href = '/'; // Navigate to the root path
  };
  return (
    <div className="nav2__main">
      <div className="nav_left">
        <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689691058/Frame_19_zd9u72.svg"></img>
        <p>Onlearn</p>
      </div>

      <div className="nav_right">
      <button onClick={navigateToHome}>Home</button>
      </div>
    </div>
  );
}

export default Nav2;
