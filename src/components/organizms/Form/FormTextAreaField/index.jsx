import React from "react";
import { useFormikContext } from "formik";
import TextArea from "../../../molecules/TextArea";

const FormTextAreaField = ({ name, placeholder, type = "text" }) => {
  const { values, handleChange } = useFormikContext();
  return (
    <div className="form-field">
      <TextArea
        type={type}
        onChange={handleChange(name)}
        placeholder={placeholder}
        value={values[name]}
      />
    </div>
  );
};

export default FormTextAreaField;
