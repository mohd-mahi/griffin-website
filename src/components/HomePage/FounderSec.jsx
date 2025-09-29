import { jarallax } from "jarallax";
import React, { useEffect } from "react";

const FounderSec = () => {
  useEffect(() => {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.5,
      imgElement: ".parallax-img",
    });
  }, []);
  return (
    <section
      className="founder-section padding-section jarallax"
      data-swiper-parallax="200"
      data-jarallax
      data-speed="0.5"
    >
      <div className="container">
        <div className="founder-wrapper-container">
          <div className="row px" data-aos="fade-up" data-aos-delay="250">
            <div className="col-6">
              <img src="/images/rohan-patil.png" alt="founder-1" />
            </div>
            <div className="col-6 d-flex justify-content-end">
              <img src="/images/suyashh-patil.png" alt="founder-2" />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="title" data-aos="fade-up" data-aos-delay="300">
                <img src="/images/gold-ball-icon.png" alt="ball" />
                <h3>Mr. Rohan Patil</h3>
              </div>
            </div>
            <div className="col-6">
              <div className="title mx" data-aos="fade-up" data-aos-delay="300">
                <img src="/images/gold-ball-icon.png" alt="ball" />
                <h3>Suyashh Paatil</h3>
              </div>
            </div>
          </div>
          <p className="founder-para" data-aos="fade-up" data-aos-delay="350">
            “Our goal was simple - to create a landmark that would elevate not
            just businesses, but the city itself. A tribute to those who dare to
            dream big and demand the best. Atlantiis is more than just a
            structure - it’s a vision brought to life. A space where ambition,
            design, and opportunity come together to shape Sangli’s future.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderSec;
