import React from "react";
import Navbard from "../common/navbar";
import Banner from "./Banner";
import FindYourTutor from "./FindYourTutor";
import Slider from "./Slider";
import Why from "./Why";
import Faq from "./Faq";
import Footer from "../common/Footer";

const Home = () => {
  return (
    <div>
      <Navbard />
      <Banner />
      <FindYourTutor />
      <Slider />
      <Why />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
