import React from "react";

const Conveniences = () => {
  const data = [
    "Civil Hospital Road - 1 min",
    "Zilla Parishad - 1 min",
    "SFC Mall - 2 mins",
    "R City Mall & Hotel Sayaji - 5 mins",
    "ST Stand - 5 mins",
    "Railway Station Sangli - 7 mins",
    "Bharati Hospital & Medical College - 7 mins",
    "Sangli Mahanagarpalika - 7 mins",
    "Collector Office & Court - 7 mins",
    "Ushahkal Hospital - 15 mins",
  ];
  return (
    <section className="conveniences-section padding-section less">
      <div className="container">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-lg-6">
            <div className="conv-content">
              <h2 className="sub-title">
                {" "}
                The best conveniences, within minutes
              </h2>
              <ul>
                {data.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="location-wrapper">
              <img
                src="/images/project-page/mapp.png"
                alt=""
                className="img-fluid h-100 object-fit-cover"
              />
              {/* <iframe

                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30176.93107515325!2d72.83286389623414!3d19.014592523148895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cedb5fa4a535%3A0x386d6d640427d1f0!2sGokuldas%20Gathiawala!5e0!3m2!1sen!2sin!4v1757565841447!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conveniences;
