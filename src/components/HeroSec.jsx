import React, { useEffect } from "react";
import TextSplit from "./TextSplit";
import { jarallax } from "jarallax";

const HeroSec = ({ children, cl }) => {
  useEffect(() => {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.5,
      imgElement: ".parallax-img",
    });
  }, []);
  return (
    <section
      className={`hero-section jarallax ${cl}`}
      data-swiper-parallax="200"
      data-jarallax
      data-speed="0.5"
    >
      <div className="container ">
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <TextSplit revealType="word">{children}</TextSplit>
            <div className="img-container">
              <img src="/images/fade-logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSec;
