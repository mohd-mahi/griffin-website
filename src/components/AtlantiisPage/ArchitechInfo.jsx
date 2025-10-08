import React from "react";
import TextSplit from "../TextSplit";
import SecTitle from "../SecTitle";

const ArchitechInfo = () => {
  // const delaySecond = 100;
  return (
    <section className="architech-info padding-section pb-0">
      <div className="container-fluid">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-lg-6 position-relative pr-side">
            <div className="info-content">
              <SecTitle>From the architect’s desk </SecTitle>
              <p data-aos="fade-up" data-aos-delay="400">
                Designing Atlantiis on a small plot presented significant
                challenges, especially with incorporating three levels of
                underground parking with ramp access. The client required
                flexible commercial spaces ranging from 600 to 9000 sq. ft.,
                free of columns and adaptable for MEP services. We addressed
                these needs through meticulous planning and the use of
                post-tension technology, ensuring large, open areas. The
                building optimizes natural light with state-of-the-art façade
                system, reducing heat on the east and west sides. Designed with
                energy e ciency and sustainability in mind, Atlantiis promises
                to set a new standard for commercial developments in Sangli.{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-6 position-relative pe-0">
            <div className="info-img-wrapper">
              <div
                className="info-img"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <img
                  src="/images/project-page/ar-pramod-parikh.jpg"
                  alt="image.."
                />
                <h3 className="info-name">Ar. Pramod Parikh</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row  padding-section">
          <div className="col-lg-6 position-relative ps-0">
            <div className="info-img-wrapper">
              <div
                className="info-img"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <img
                  src="/images/project-page/ar-mukul-parikh.jpg"
                  alt="image.."
                />
                <h3 className="info-name"> Er. Mukul Parikh</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-6 position-relative pl-side">
            <div className="info-content">
              {/* <h2 className="sub-title"> </h2> */}
              <SecTitle>From the architect’s desk</SecTitle>
              <p data-aos="fade-up" data-aos-delay="400">
                The Atlantiis project is a fully commercial development
                featuring three basement floors for parking and ten upper floors
                for varied commercial spaces. To meet the demand for large,
                column-free areas, we utilized Post-Tensioning Technology for
                the RCC structure, allowing a 16-meter column spacing and
                providing an uninterrupted floor plate of 9,000 sq. ft. The
                structural system was meticulously designed to comply with
                high-rise building norms while ensuring seamless integration of
                MEP services. This structural approach was crucial in providing
                maximum flexibility in access, parking, and service layouts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitechInfo;
