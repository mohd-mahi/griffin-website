import React from "react";
import TextSplit from "./TextSplit";
const delaySecond = 100;
const Heading = ({ heading, children }) => {
  return (
    <div className="heading-container">
      <TextSplit revealType="word">
        <h2
          className={`sub-title ${heading}`}
          data-aos="fade-in"
          style={{ "--delaySecond": `${delaySecond}ms` }}
        >
          {children}
        </h2>
      </TextSplit>
    </div>
  );
};

export default Heading;
