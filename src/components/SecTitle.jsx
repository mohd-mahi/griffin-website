import React from "react";
import TextSplit from "./TextSplit";
const SecTitle = ({ children }) => {
  const delaySecond = 100;
  return (
    <TextSplit revealType="word">
      <h2
        className="sub-title"
        data-aos="fade-in"
        style={{ "--delaySecond": `${delaySecond}ms` }}
      >
        {children}
      </h2>
    </TextSplit>
  );
};

export default SecTitle;
