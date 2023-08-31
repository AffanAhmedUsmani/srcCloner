import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer_main">
      <div className="footer_inner">
        <div className="footer_first">
          <div className="first_top">
            <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689703731/Frame_19_1_tjc1my.svg"></img>
            <p>Onlearn</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, adipiscing elit. Nam accumsan, nisl
            vitae tempor hendrerit, ex tellus auctor est, in sattis diam est sed
            magna. Vitae ultrices orci. Suspendisse viverra vitae velit eu
            sollicitudin.Mauris lectus quam.
          </p>
          <h2>Follow us On.</h2>
          <div className="socal">
            <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689703987/youtube-256_n6jauu.png"></img>
            <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689703987/linkedin-circled-240_dqmv4h.png"></img>
            <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689703987/instagram-240_l3362k.png"></img>
            <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689703987/twitter-circled-240_j3th65.png"></img>
            <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689703986/facebook-240_xmsed3.png"></img>
          </div>
        </div>
        <div className="footer_second">
          <p className="footer_header">COMPANY NAME</p>
          <p className="footer_li">About Us</p>
          <p className="footer_li"> Privacy Policy</p>
          <p className="footer_li"> Terms & Condition</p>
          <p className="footer_li"> Pricing & Refund Policy</p>
          <p className="footer_li">Bug Bounty</p>
          <p className="footer_li">Our students</p>
          <p className="footer_li">Press Release</p>
        </div>
        <div className="footer_second">
          <p className="footer_header">COURSES</p>
          <p className="footer_li">Mathematics</p>
          <p className="footer_li">Physics</p>
          <p className="footer_li">Biology</p>
          <p className="footer_li">Computer</p>
          <p className="footer_li">Science</p>
          <p className="footer_li">Chemistry</p>
          <p className="footer_li">English</p>
          <p className="footer_li">History</p>
        </div>
        <div className="footer_second">
          <p className="footer_header">CONTACT US</p>
          <p className="footer_li">1800-123-3598</p>
          <p className="footer_li">company@email.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
