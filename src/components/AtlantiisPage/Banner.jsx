import React from "react";

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="container">
        <div className="row banner-row">
          <div className="col-6">
            <div
              className="banner-content"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h2 className="sub-title">
                Take a glimpse <br /> into grandeur
              </h2>
              <a href="?">
                <span className="download-btn">Download Brochure</span>
                <img src="/images/play-button.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-6 position-relative d-flex justify-content-between align align-self-end align-self-sm-auto">
            <div className="banner-img-box">
              <img
                src="/images/project-page/atlantiis-circle-logo.png"
                alt=""
              />
            </div>
            <div className="fea-dot">
              <img src="/images/gold-ball-icon.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
