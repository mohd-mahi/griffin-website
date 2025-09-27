import React from "react";
import SecTitle from "../SecTitle";

const Overview = () => {
  return (
    <section className="overview-section padding-section tbg">
      <div className="container position-relative">
        {/* top-bg  */}
        <div className="left-sec-bg sec-bg">
          <img src="/images/ribbon-left-bg.png" alt="" />
        </div>
        <div className="right-sec-bg sec-bg">
          <img src="/images/ribbon-left-bg.png" alt="" />
        </div>
        {/* top-bg end  */}
        <div className="overview-wrapper">
          <div className="first-text-wrapper">
            <SecTitle>Ratna Developers</SecTitle>
            <p data-aos="fade-up" data-aos-delay="400">
              Founded in 2015, Ratna Developers upholds the Patil family’s
              70-year legacy of excellence. Known for modern design and superior
              craftsmanship, the group continues to deliver luxurious and
              sustainable spaces with integrity.
            </p>
          </div>
          <div className="second-text-wrapper">
            <SecTitle> Suyashh Constructiions</SecTitle>
            <p data-aos="fade-up" data-aos-delay="400">
              {" "}
              Established in 2013, Suyashh Constructiions is recognized for its
              architectural brilliance and quality. With landmark projects like
              Suyash Square, the group is set to expand into major markets,
              crafting developments that enhance urban landscapes and inspire
              thriving communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
