import React from "react";

import "./style.scss";

const Input = ({ type, onChange, className, ...props }) => {
  return (
    <input
      type={type}
      onChange={onChange}
      className={`input ${className}`}
      {...props}
    />
  );
};

export default Input;
