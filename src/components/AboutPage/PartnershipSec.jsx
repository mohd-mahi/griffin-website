import React from "react";
import SecTitle from "../SecTitle";

const PartnershipSec = () => {
  return (
    <section className="partnership-section padding-section tbg">
      <div className="container position-relative">
        <div className="left-sec-bg sec-bg">
          <img src="/images/ribbon-left-bg.png" alt="" />
        </div>
        <div className="right-sec-bg sec-bg">
          <img src="/images/ribbon-left-bg.png" alt="" />
        </div>
        <div className="partnership-content-wrapper about-container">
          <SecTitle>A powerful partnership shaping Sangli’s skyline</SecTitle>
          <p data-aos="fade-up" data-aos-delay="400">
            <strong> Griffin Innfra </strong> is brought to life by the
            collaborative vision of <strong>Ratna Developers </strong>and
            <strong> Suyashh Constructiions</strong>-two trusted names shaping
            Sangli’s skyline. With deep-rooted values and forward-thinking
            design, Ratna Developers builds on a 70-year Patil family legacy of
            excellence. Since 2013, Suyashh Constructiions has made its mark
            with standout projects like Suyash Square, combining architectural
            brilliance with community impact. Together, these partners bring
            unmatched experience, quality, and vision to create Sangli’s most
            prestigious commercial destination yet.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSec;
