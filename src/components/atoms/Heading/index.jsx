import React from "react";

import "./style.scss";

const Heading = ({ size = "normal", title }) => {
  switch (size) {
    case "big":
      return <h1 className={`heading ${size}`}>{title}</h1>;
    case "normal":
      return <h3 className={`heading ${size}`}>{title}</h3>;
    case "small":
      return <h5 className={`heading ${size}`}>{title}</h5>;
    default:
      return null;
  }
};

export default Heading;
