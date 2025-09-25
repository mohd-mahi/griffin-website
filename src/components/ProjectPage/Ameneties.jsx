import React from "react";
import Heading from "../Heading";

const Ameneties = () => {
  const icons = [
    {
      text: "coffee-break",
      path: "/images/icons/coffee-break.png",
    },
    {
      text: "consumer-centric",
      path: "/images/icons/consumer-centric.png",
    },
    {
      text: "excellence",
      path: "/images/icons/excellence.png",
    },
    {
      text: "honesty",
      path: "/images/icons/honesty.png",
    },
    {
      text: "innovation",
      path: "/images/icons/innovation.png",
    },
    {
      text: "restaurant",
      path: "/images/icons/restaurant.png",
    },
    {
      text: "testament",
      path: "/images/icons/testament.png",
    },
  ];
  return (
    <section className="amenties-section padding-section">
      <div className="container">
        <Heading heading="heading">
          Extraordinary. Exclusive. Exceptional. in every way
        </Heading>
        <div className="row g-lg-5 g-4">
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
      </div>
    </section>
  );
};

export default Ameneties;
