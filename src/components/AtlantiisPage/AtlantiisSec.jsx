import React from "react";

const AtlantiisSec = () => {
  return (
    <section className="atlantiis-section">
      <div className="container-wrapper">
        <div className="top-bg-container">
          <img src="/images/project-page/prj-ribbons-bg.png" alt="" />
        </div>
        <div
          className="image-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src="/images/building-cut-bg.png"
            alt="building-img"
            className="img"
          />
          <div className="atlantic-text-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-6"></div>
                <div className="col-lg-6">
                  <div className="alt-content">
                    <div className="alt-wrapper">
                      <div className="alt-logo">
                        <img
                          src="/images/project-page/atlantiis-logo.png"
                          alt="atlantiis logo"
                        />
                      </div>
                      <div className="alt-des">
                        <h2>A landmark</h2>
                        <h3>address for visionaries</h3>
                      </div>
                      <h4>Grade ‘A’ office spaces & showrooms</h4>
                    </div>
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

export default AtlantiisSec;
