import React from "react";

import "./style.scss";

const TextArea = ({ onChange, placeholder }) => {
  return (
    <textarea
      onChange={onChange}
      className={"textarea"}
      placeholder={placeholder}
    />
  );
};

export default TextArea;
