import React from "react";

const IntroSec = () => {
  return (
    <section className="intro-section padding-section ">
      <div className="intro-bottom-bg">
        <img src="/images/ribbons-bg.png" alt="section-bg" />
      </div>
      <div className="container">
        <div className="row flex-column-reverse flex-lg-row g-4">
          <div className="col-lg-6">
            <div className="intro-content">
              <h2 className="sub-title" data-aos="fade-up" data-aos-delay="250">
                Introducing the crown <br /> jewel of Sangli
              </h2>
              <p data-aos="fade-up" data-aos-delay="300">
                Featuring 11-storey high-rise tower with a modern, eye-catching
                facade, Atlantiis is a symbol of a new era of commerce, where
                businesses collaborate and thrive in a space designed to grow
                and succeed. Strategically situated in the heart of Sangli.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="intro-img-container">
              <div className="intro-bg"></div>
              <div className="intro-img-wrapper">
                <div
                  className="intro-first-img"
                  data-aos="fade-up"
                  data-aos-delay="250"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSec;
