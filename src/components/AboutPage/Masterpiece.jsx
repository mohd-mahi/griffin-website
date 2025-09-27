import React from "react";
import SecTitle from "../SecTitle";

const Masterpiece = () => {
  return (
    <section className="masterpiece-section">
      <div className="first-piece-wrapper piece-wrapper">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div
                className="piece-img-wrapper"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img src="/images/rohan-patil.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="piece-text-wrapper">
                <SecTitle> The mind behind the masterpiece</SecTitle>
                <div className="piece-bottom-text">
                  <div className="piece-title">
                    <SecTitle>Mr. Rohan Patil</SecTitle>
                    <p data-aos="fade-up" data-aos-delay="400">
                      {" "}
                      <strong> Mr. Rohan Patil</strong> has consistently created
                      luxurious and sustainable living spaces. With his wealth
                      of experience, Rohan now brings his expertise to the
                      creation of Atlantiis, setting new standards in the
                      landscape of commercial development.
                    </p>
                  </div>
                  <img
                    data-aos="fade-up"
                    data-aos-delay="450"
                    src="/images/gold-ball-icon.png"
                    alt=""
                    className="gold-ball"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="piece-wrapper second-piece-wrapper">
        <div className="container">
          <div className="row align-items-end flex-column-reverse flex-lg-row">
            <div className="col-lg-6">
              <div className="piece-text-wrapper text-start ">
                <div className="piece-bottom-text align-items-start">
                  <div className="piece-title">
                    <SecTitle> Mr. suyashh-patil</SecTitle>
                    <p data-aos="fade-up" data-aos-delay="400">
                      {" "}
                      <strong> Mr. Rohan Patil</strong> has consistently created
                      luxurious and sustainable living spaces. With his wealth
                      of experience, Rohan now brings his expertise to the
                      creation of Atlantiis, setting new standards in the
                      landscape of commercial development.
                    </p>
                  </div>
                  <img
                    src="/images/gold-ball-icon.png"
                    alt=""
                    className="gold-ball"
                    data-aos="fade-up"
                    data-aos-delay="450"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="piece-img-wrapper"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img src="/images/suyashh-patil.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Masterpiece;
