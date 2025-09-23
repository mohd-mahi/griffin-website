import React from "react";

const HeroSec = (props) => {
  return (
    <section className="hero-section">
      <div className="hero-img-container">
        <img src={props.cl} alt="" />
      </div>
      <div className="container ">
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <h1 data-aos="fade-up" data-aos-delay="200">
              <span className="highlight">{props.hl} </span>
              {props.title}
              <span className="highlight"> {props.hl2} </span>
              {props.title2}
            </h1>

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
