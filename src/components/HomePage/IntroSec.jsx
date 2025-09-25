import React from "react";
import SecTitle from "../SecTitle";

const IntroSec = () => {
  return (
    <section className="intro-section padding-section ">
      <div className="container">
        <div className="row flex-column-reverse flex-lg-row g-4">
          <div className="col-lg-6">
            <div className="intro-content position-relative">
              <div className="intro-bottom-bg-1">
                <img src="/images/assets-1.png" alt="section-bg" />
              </div>
              <SecTitle>
                Introducing the crown
                <br />
                jewel of Sangli
              </SecTitle>

              <p data-aos="fade-up" data-aos-delay="400">
                Featuring 11-storey high-rise tower with a modern, eye-catching
                facade, Atlantiis is a symbol of a new era of commerce, where
                businesses collaborate and thrive in a space designed to grow
                and succeed. Strategically situated in the heart of Sangli.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="intro-img-container position-relative">
              <div className="intro-bg"></div>
              <div className="intro-img-wrapper">
                <div
                  className="intro-first-img"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <img src="/images/home-img.jpg" alt="img-one" />
                </div>
                <div className="bottom-bg">
                  <div
                    className="intro-first-two"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <img src="/images/home-img-2.jpg" alt="img-two" />
                  </div>
                </div>
              </div>
              <div className="intro-bottom-bg-2">
                <img src="/images/assets-2.png" alt="section-bg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSec;
