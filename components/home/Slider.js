import React from "react";
import "./slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";

function Slider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  };
  return (
    <div className="slider_main">
      <div className="slider_inner">
        <h1>WHAT OUR STUDENTS SAY ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit fusce at
          pulvinar arcu, proin congue justo leo in vulputate urna tincidunt id.
        </p>
      </div>
      <div className="slider_inner2">
        <SlickSlider {...settings}>
          <div className="slider_outer">
            <div className="slider_2_inner">
              <div className="slide_top">
                <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689700168/indian-students-1_1_d4nbta.png"></img>
                <div>
                  <p>Riya Sen</p>
                  <p>Amazon</p>
                </div>
              </div>
              <div className="slide__bottom">
                <p>
                  Lorem ipsum dolor sit amet, adipiscing elit. Nam accumsan,
                  nisl vitae tempor hendrerit, ex tellus auctor est, in sattis
                  diam est sed magna. Vitae ultrices orci. Suspendisse viverra
                  vitae velit eu sollicitudin.Mauris lectus quam, aliquam a
                  lectus vitae, aliquet tempor nulla.
                </p>
              </div>
            </div>
          </div>
          <div className="slider_outer">
            <div className="slider_2_inner">
              <div className="slide_top">
                <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689700168/indian-students-1_1_d4nbta.png"></img>
                <div>
                  <p>Riya Sen</p>
                  <p>Amazon</p>
                </div>
              </div>
              <div className="slide__bottom">
                <p>
                  Lorem ipsum dolor sit amet, adipiscing elit. Nam accumsan,
                  nisl vitae tempor hendrerit, ex tellus auctor est, in sattis
                  diam est sed magna. Vitae ultrices orci. Suspendisse viverra
                  vitae velit eu sollicitudin.Mauris lectus quam, aliquam a
                  lectus vitae, aliquet tempor nulla.
                </p>
              </div>
            </div>
          </div>
          <div className="slider_outer">
            <div className="slider_2_inner">
              <div className="slide_top">
                <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689700168/indian-students-1_1_d4nbta.png"></img>
                <div>
                  <p>Riya Sen</p>
                  <p>Amazon</p>
                </div>
              </div>
              <div className="slide__bottom">
                <p>
                  Lorem ipsum dolor sit amet, adipiscing elit. Nam accumsan,
                  nisl vitae tempor hendrerit, ex tellus auctor est, in sattis
                  diam est sed magna. Vitae ultrices orci. Suspendisse viverra
                  vitae velit eu sollicitudin.Mauris lectus quam, aliquam a
                  lectus vitae, aliquet tempor nulla.
                </p>
              </div>
            </div>
          </div>
          <div className="slider_outer">
            <div className="slider_2_inner">
              <div className="slide_top">
                <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689700168/indian-students-1_1_d4nbta.png"></img>
                <div>
                  <p>Riya Sen</p>
                  <p>Amazon</p>
                </div>
              </div>
              <div className="slide__bottom">
                <p>
                  Lorem ipsum dolor sit amet, adipiscing elit. Nam accumsan,
                  nisl vitae tempor hendrerit, ex tellus auctor est, in sattis
                  diam est sed magna. Vitae ultrices orci. Suspendisse viverra
                  vitae velit eu sollicitudin.Mauris lectus quam, aliquam a
                  lectus vitae, aliquet tempor nulla.
                </p>
              </div>
            </div>
          </div>
          <div className="slider_outer">
            <div className="slider_2_inner">
              <div className="slide_top">
                <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689700168/indian-students-1_1_d4nbta.png"></img>
                <div>
                  <p>Riya Sen</p>
                  <p>Amazon</p>
                </div>
              </div>
              <div className="slide__bottom">
                <p>
                  Lorem ipsum dolor sit amet, adipiscing elit. Nam accumsan,
                  nisl vitae tempor hendrerit, ex tellus auctor est, in sattis
                  diam est sed magna. Vitae ultrices orci. Suspendisse viverra
                  vitae velit eu sollicitudin.Mauris lectus quam, aliquam a
                  lectus vitae, aliquet tempor nulla.
                </p>
              </div>
            </div>
          </div>
        </SlickSlider>
      </div>
    </div>
  );
}

export default Slider;
