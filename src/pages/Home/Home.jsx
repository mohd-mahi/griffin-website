import React from "react";
import HeroSec from "../../components/HeroSec";
import IntroSec from "../../components/HomePage/IntroSec";
import LandmarkSec from "../../components/HomePage/LandmarkSec";
import FounderSec from "../../components/HomePage/FounderSec";
import { Helmet } from "react-helmet";
const Home = () => {
  // useEffect(() => {
  //   document.title = "Welcome to Griffin Innfra";
  // }, []);
  return (
    <>
      <Helmet>
        <title>Welcome to Griffin Innfra</title>
      </Helmet>
      <HeroSec img="/images/homepage-bg.jpg">
        <h1 data-aos="fade-in">
          <span className="highlight">Expertise</span> THAT SHAPES SKYLINES.
          <span className="highlight">VISION</span> THAT BUILDS LEGACIES.
        </h1>
      </HeroSec>
      <IntroSec />
      <LandmarkSec />
      <FounderSec />
    </>
  );
};

export default Home;
