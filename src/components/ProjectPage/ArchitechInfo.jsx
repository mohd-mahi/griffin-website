import React from "react";

const ArchitechInfo = () => {
  return (
    <section className="architech-info padding-section">
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 position-relative">
            <div className="info-content">
              <h2 className="sub-title"> From the architect’s desk</h2>
              <p>
                Designing Atlantiis on a small plot presented significant
                challenges, especially with incorporating three levels of
                underground parking with ramp access. The client required f
                lexible commercial spaces ranging from 600 to 9000 sq. ft., free
                of columns and adaptable for MEP services. We addressed these
                needs through meticulous planning and the use of post-tension
                technology, ensuring large, open areas. The building optimizes
                natural light with state-of-the-art façade system, reducing heat
                on the east and west sides. Designed with energy e ciency and
                sustainability in mind, Atlantiis promises to set a new standard
                for commercial developments in Sangli.{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-6 position-relative">
            <div className="position-relative">
              <div className="info-img">
                <img
                  src="/images/project-page/ar-pramod-parikh.jpg"
                  alt="image.."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitechInfo;
