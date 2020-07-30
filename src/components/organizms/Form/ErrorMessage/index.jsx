import React from "react";
import { useFormikContext } from "formik";

import "./style.scss";

const ErrorMessage = ({ name }) => {
  const { touched, errors } = useFormikContext();

  if (!touched[name] || !errors[name]) {
    return null;
  }

  return <p className={"error-message"}>{errors[name]}</p>;
};

export default ErrorMessage;
