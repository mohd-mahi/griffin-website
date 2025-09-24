import React from "react";
import HeroSec from "../../components/HeroSec";
import IntroSec from "../../components/HomePage/IntroSec";
import LandmarkSec from "../../components/HomePage/LandmarkSec";
import FounderSec from "../../components/HomePage/FounderSec";
const Home = () => {
  return (
    <>
      <HeroSec cl="images/homepage-bg.jpg">
        <h1 data-aos="fade-up">
          <span className="highlight">Expertise</span> THAT SHAPES SKYLINES.
          <span className="highlight"> VISION</span> THAT BUILDS LEGACIES.
        </h1>
      </HeroSec>
      <IntroSec />
      <LandmarkSec />
      <FounderSec />
    </>
  );
};

export default Home;
