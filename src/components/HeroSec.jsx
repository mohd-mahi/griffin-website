import React, { useEffect } from "react";
import TextSplit from "./TextSplit";
import { jarallax } from "jarallax";
import ArtistImpression from "./ArtistImpression";

const HeroSec = ({ children, img, cl }) => {
  useEffect(() => {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.5,
    });

    return () => {
      jarallax(document.querySelectorAll(".jarallax"), "destroy");
    };
  }, []);

  return (
    <section className={`hero-section ${cl}`}>
      {/* Jarallax wrapper */}
      <div className="hero-bg jarallax">
        <img className="jarallax-img" src={img} alt="Parallax Background" />
      </div>
      <div className="container">
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <TextSplit revealType="word">{children}</TextSplit>
            <div className="img-container">
              <img src="/images/fade-logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <ArtistImpression text="Artist's impression*" />
    </section>
  );
};

export default HeroSec;
