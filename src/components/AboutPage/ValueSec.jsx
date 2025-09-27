import React from "react";
import Heading from "../Heading";

const ValueSec = () => {
  const values = [
    {
      title: "Excellence",
      description:
        "We strive for perfection in every detail from design & construction to service & delivery.",
      icon: "/images/icons/excellence.png",
    },
    {
      title: "Honesty",
      description:
        "Upholding honesty and strong moral principles in all our actions.",
      icon: "/images/icons/honesty.png",
    },
    {
      title: "Innovation",
      description:
        "Driving progress through creativity, new ideas, and forward thinking.",
      icon: "/images/icons/innovation.png",
    },
    {
      title: "Testament",
      description: "Building a lasting impact that endures beyond generations.",
      icon: "/images/icons/testament.png",
    },
    {
      title: "Customer Centricity",
      description: "Placing customers at the heart of everything we do.",
      icon: "/images/icons/consumer-centric.png",
    },
  ];

  return (
    <section className="value-section padding-section">
      <div className="container">
        <Heading heading="heading">
          Values
          <br />
          We Stand On
        </Heading>
        <div className="value-wrapper">
          <div className="row value-row">
            {values.map((item, index) => (
              <div
                className="col-md-4 col-6"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100 + 600}
              >
                <div className="amenties-card">
                  <div className="card-image">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <h3>{item.title}</h3>
                  <div className="top-card">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSec;
