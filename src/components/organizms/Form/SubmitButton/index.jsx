import React from "react";
import { useFormikContext } from "formik";
import Button from "../../../molecules/Button";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return <Button onClick={handleSubmit} title={title} type={"submit"} />;
};

export default SubmitButton;
