import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Heading from "../Heading";
import ArtistImpression from "../ArtistImpression";

const Explore = () => {
  useEffect(() => {
    // Initialize Fancybox
    Fancybox.bind("[data-fancybox='gallery']", {
      Thumbs: false,
      hideScrollbar: false,

      Toolbar: {
        display: [
          { id: "counter", position: "center" },
          "zoom",
          "slideshow",
          "fullscreen",
          "close",
        ],
      },
      animated: true,
      dragToClose: true,
      closeButton: "top",
      showClass: "fancybox-fadeIn",
      // hideClass: "fancybox-fadeOut",
      Carousel: {
        transition: "slide",
        friction: 0.8,
      },
    });

    // Cleanup on unmount
    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <section className="explore-section padding-section less">
      <div className="container">
        <Heading>Explore the Project</Heading>

        <div className="row g-3" data-aos="fade-up" data-aos-delay="400">
          {/* 1 */}
          <div className="col-lg-8 col-sm-6" data-aos="fade-up">
            <a
              href="/images/atlantiis/atlantiis-porch.jpg"
              data-fancybox="gallery"
              className="explore-card"
            >
              <div className="explore-img-box">
                <img src="/images/project-page/atlantiis-porch.jpg" alt="" />
              </div>
              <ArtistImpression text="Artist's impression*" />
            </a>
          </div>

          {/* 2 */}
          <div
            className="col-lg-4 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <a
              href="/images/atlantiis/atlantiis-front-ext.jpg"
              data-fancybox="gallery"
              className="explore-card"
            >
              <div className="explore-img-box">
                <img
                  src="/images/project-page/atlantiis-front-ext.jpg"
                  alt=""
                />
              </div>
              <ArtistImpression text="Artist's impression*" />
            </a>
          </div>

          {/* 3 */}
          <div
            className="col-lg-4 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <a
              href="/images/atlantiis/atlantiis-bordview.jpg"
              data-fancybox="gallery"
              className="explore-card"
            >
              <div className="explore-img-box">
                <img src="/images/project-page/atlantiis-bordview.jpg" alt="" />
              </div>
              <ArtistImpression text="Artist's impression*" />
            </a>
          </div>

          {/* 4 */}
          <div
            className="col-lg-8 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <a
              href="/images/atlantiis/atlantiis-terrace.jpg"
              data-fancybox="gallery"
              className="explore-card"
            >
              <div className="explore-img-box">
                <img src="/images/project-page/atlantiis-terrace.jpg" alt="" />
              </div>
              <ArtistImpression text="Artist's impression*" />
            </a>
          </div>

          {/* 5 */}
          <div
            className="col-lg-8 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <a
              href="/images/atlantiis/atlantiis-lobby.jpg"
              data-fancybox="gallery"
              className="explore-card"
            >
              <div className="explore-img-box shd">
                <img src="/images/project-page/atlantiis-lobby.jpg" alt="" />
              </div>
              <ArtistImpression text="Artist's impression*" />
            </a>
          </div>

          {/* 6 */}
          <div
            className="col-lg-4 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="550"
          >
            <a
              href="/images/atlantiis/atlantiis-ext.jpg"
              data-fancybox="gallery"
              className="explore-card"
            >
              <div className="explore-img-box shdn">
                <img src="/images/project-page/atlantiis-ext.jpg" alt="" />
              </div>
              <ArtistImpression text="Artist's impression*" />
            </a>
          </div>

          {/* Explore More Button */}
          <div
            className="col-12 explore-btn"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <NavLink to="?">Explore More</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
