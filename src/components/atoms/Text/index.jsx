import React from "react";

import "./style.scss";

const Text = ({ text, size, className }) => {
  return <p className={`text ${size} ${className}`}>{text}</p>;
};

export default Text;
