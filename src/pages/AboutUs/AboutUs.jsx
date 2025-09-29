import React from "react";
import HeroSec from "../../components/HeroSec";
import PartnershipSec from "../../components/AboutPage/PartnershipSec";
import Overview from "../../components/AboutPage/Overview";
import InfoSec from "../../components/AboutPage/InfoSec";
import ValueSec from "../../components/AboutPage/ValueSec";
import Masterpiece from "../../components/AboutPage/Masterpiece";
import ContactUs from "../../components/ContactUs";

const AboutUs = () => {
  return (
    <>
      <HeroSec img="/images/about-banner-bg.jpg" cl="about-us">
        <h1 data-aos="fade-in">
          <span className="highlight">A Union</span> of excellence
          <br />
          and timeless
          <span className="highlight">craftsmanship</span>
        </h1>
      </HeroSec>
      <PartnershipSec />
      <InfoSec />
      <ValueSec />
      <Overview />
      <Masterpiece />
      <ContactUs />
    </>
  );
};

export default AboutUs;
