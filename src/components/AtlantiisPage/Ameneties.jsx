import React from "react";
import Heading from "../Heading";

const Ameneties = () => {
  const icons = [
    {
      text: " Three-floor secure parking",
      path: "/images/project-page/parking-icon.png",
    },
    {
      text: "3-Tier Security",
      path: "/images/project-page/secam-icon.png",
    },
    {
      text: "Grand entrance lobby",
      path: "/images/project-page/grand-lobby-icon.png",
    },
    {
      text: "Rooftop restaurant",
      path: "/images/project-page/rooftop-rest-icon.png",
    },
    {
      text: "Cafeteria",
      path: "/images/project-page/cafe-icon.png",
    },
    {
      text: "Modern elevator system",
      path: "/images/project-page/elev-icon.png",
    },
    {
      text: "Meeting Rooms",
      path: "/images/project-page/meeting-room-icon.png",
    },
    {
      text: "Conference Rooms",
      path: "/images/project-page/conf-icons.png",
    },
  ];
  return (
    <section className="amenties-section padding-section">
      <div className="container">
        <Heading heading="heading">
          Extraordinary. Exclusive. Exceptional. <br /> in every way
        </Heading>
        <div className="row g-lg-5 g-4 justify-content-center">
          {icons.map((value, index) => (
            <div className="col-lg-3 col-sm-4 col-6" key={index}>
              <div className="amenties-card">
                <div className="card-image">
                  <img src={value.path} alt="" />
                </div>
                <h3>{value.text}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="amen-bottom-icon">
          <img src="/images/gold-ball-icon.png" alt="" className="gold-ball" />
        </div>
      </div>
    </section>
  );
};

export default Ameneties;
