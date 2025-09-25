import React from "react";
import { NavLink } from "react-router-dom";
import Heading from "../Heading";

const Explore = () => {
  return (
    <section className="explore-section padding-section less ">
      <div className="container">
        <Heading>
          Explore <br /> the project
        </Heading>
        <div className="row g-3 shd" data-aos="fade-up" data-aos-delay="400">
          <div className="col-lg-8  col-sm-6">
            <div className="explore-img-box" data-aos="fade-up">
              <img src="/images/project-page/atlantiis-porch.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="explore-img-box"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <img src="/images/project-page/atlantiis-front-ext.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="explore-img-box"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <img src="/images/project-page/atlantiis-bordview.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-8 col-sm-6">
            <div
              className="explore-img-box"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              <img src="/images/project-page/atlantiis-terrace.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-8  col-sm-6">
            <div
              className="explore-img-box"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              <img src="/images/project-page/atlantiis-lobby.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="explore-img-box"
              data-aos="fade-up"
              data-aos-delay="550"
            >
              <img src="/images/project-page/atlantiis-ext.jpg" alt="" />
            </div>
          </div>
          <div className="col-12 explore-btn" data-aos="fade-up">
            <NavLink to="?">Explore More</NavLink>
          </div>
        </div>
        {/* <div className="random-bottom-bg">
          <div className="row align-items-center">
            <div className="col-6">
              <img
                src="/images/gold-ball-icon.png"
                alt=""
                style={{ width: "30px" }}
              />
            </div>
            <div className="col-6">
              <div className="image-wrapper">
                <img src="/images/assets-2.png" alt="" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Explore;
