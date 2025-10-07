import React from "react";
import SecTitle from "../SecTitle";

const BusinessSec = () => {
  return (
    <section className="business-section padding-section">
      <div className="container-fluid">
        <div className="row ">
          <div
            className="col-lg-6 position-relative"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div className="business-image-container">
              <img
                src="/images/project-page/atlantiis-prj-01.jpg"
                alt="image"
              />
            </div>
            <div className="dot-image ">
              <img src="/images/gold-ball-icon.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 position-relative">
            <div className="business-text-content position-relative">
              <SecTitle>
                The future of business
                <br />
                begins here
              </SecTitle>
              <p data-aos="fade-up" data-aos-delay="350">
                {" "}
                Sangli has a rich legacy of commerce, with many successful
                businesses and entrepreneurs emerging from this quaint city in
                South Maharashtra. It has always been in need of a
                transformation that matches its entrepreneurial values & awaited
                a change that would elevate it to new heights.
              </p>
              <p data-aos="fade-up" data-aos-delay="400">
                {" "}
                Presenting a new era of business and commerce. Presenting a
                symbol of change in the evolving mindset of Sangli towards
                commerce.
              </p>
              <h4 data-aos="fade-up" data-aos-delay="400">
                {" "}
                Presenting Atlantiis. Grade A office spaces & showrooms designed
                for success..
              </h4>
            </div>
            <div className="business-bottom-bg">
              <img src="/images/assets-2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSec;
