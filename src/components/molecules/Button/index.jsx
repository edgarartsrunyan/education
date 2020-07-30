import React from "react";
import Text from "../../atoms/Text";

import "./style.scss";

const Button = ({ title, onClick, className, ...props }) => {
  return (
    <button className={`button ${className}`} onClick={onClick} {...props}>
      <Text size={"small"} className={"button-text"} text={title} />
    </button>
  );
};

export default Button;
