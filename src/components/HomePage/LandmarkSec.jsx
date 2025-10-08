import React from "react";
import { Link } from "react-router-dom";
import SecTitle from "../SecTitle";
import ArtistImpression from "../ArtistImpression";

const LandmarkSec = () => {
  return (
    <section className="landmark-section">
      <div className="landmark-bg">
        <ArtistImpression text="Artist's impression*" />
        <img src="/images/building-cut-bg.png" alt="" />
        <div className="landmar-content-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 ms-auto">
                <div className="landmark-content">
                  <SecTitle>From the creators of iconic landmarks</SecTitle>

                  <p data-aos="fade-up" data-aos-delay="400">
                    <strong>Griffin in Innfra</strong> is brought to life by the
                    collaborative vision of <strong>Ratna Developers</strong>{" "}
                    and
                    <strong> Suyashh Constructiions</strong> - two trusted names
                    shaping Sangli’s skyline. With deep-rooted values and
                    forward-thinking design, Ratna Developers builds on a
                    70-year Patil family legacy of excellence.
                  </p>
                  <Link to="?" data-aos="fade-up" data-aos-delay="300">
                    Learn More...
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandmarkSec;
