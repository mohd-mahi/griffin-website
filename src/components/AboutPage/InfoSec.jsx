import React from "react";
import SecTitle from "../SecTitle";

const InfoSec = () => {
  return (
    <section className="info-section padding-section less">
      <div className="container-fluid">
        <div className="row  gy-3">
          <div className="col-lg-6 ps">
            <div
              className="info-img-container"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="img-child-container pr">
                <img src="/images/our-vision-img.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 pl-side">
            <div className="info-text-content pr">
              <div className="info-text">
                <SecTitle>Our Vision</SecTitle>
                <p data-aos="fade-up" data-aos-delay="400">
                  To become the most trusted name in premium commercial real
                  estate by crafting iconic spaces that shape the future of
                  cities, enrich communities, and stand as symbols of enduring
                  value and vision.
                </p>
              </div>
              <img
                src="/images/gold-ball-icon.png"
                alt=""
                data-aos="fade-up"
                data-aos-delay="450"
              />
            </div>
          </div>
        </div>
        <div className="row  padding-section less flex-column-reverse flex-lg-row gy-3 pb-0">
          <div className="col-lg-6 pr-side">
            <div className="info-text-content pl">
              <div className="info-text">
                <SecTitle>Our Mission</SecTitle>
                <p data-aos="fade-up" data-aos-delay="400">
                  To create landmark developments that elevate urban
                  experiences, empower business growth, and set new standards of
                  design, quality, and integrity in every project we undertake.
                </p>
              </div>
              <img
                src="/images/gold-ball-icon.png"
                alt=""
                data-aos="fade-up"
                data-aos-delay="450"
              />
            </div>
          </div>
          <div className="col-lg-6 pr">
            <div
              className="info-img-container"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="img-child-container pl">
                <img src="/images/our-mission-img.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSec;
