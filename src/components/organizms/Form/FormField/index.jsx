import React from "react";
import Input from "../../../molecules/Input";
import { useFormikContext } from "formik";
import ErrorMessage from "../ErrorMessage";

const FormField = ({ name, placeholder, type = "text" }) => {
  const { values, handleChange, setFieldTouched } = useFormikContext();
  return (
    <div className="form-field">
      <Input
        type={type}
        onChange={handleChange(name)}
        placeholder={placeholder}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
      />
      <ErrorMessage name={name} />
    </div>
  );
};

export default FormField;
