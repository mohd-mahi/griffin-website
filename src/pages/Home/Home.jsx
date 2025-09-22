import React from "react";
import HeroSec from "../../components/HeroSec";
import IntroSec from "../../components/HomePage/IntroSec";
import LandmarkSec from "../../components/HomePage/LandmarkSec";
import FounderSec from "../../components/HomePage/FounderSec";

const Home = () => {
  return (
    <>
      <HeroSec
        hl="Expertise"
        title="THAT SHAPES SKYLINES."
        hl2="VISION"
        title2="THAT BUILDS LEGACIES."
        cl="home"
      />
      <IntroSec />
      <LandmarkSec />
      <FounderSec />
    </>
  );
};

export default Home;
