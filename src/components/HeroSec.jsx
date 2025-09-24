import React from "react";

const HeroSec = ({ children, cl }) => {
  return (
    <section className="hero-section">
      <div className="hero-img-container">
        <img src={cl} alt="" />
      </div>
      <div className="container ">
        <div className="hero-content-wrapper">
          <div className="hero-content">
            {children}
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
