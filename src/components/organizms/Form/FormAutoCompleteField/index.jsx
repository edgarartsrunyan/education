import React from "react";
import { useFormikContext } from "formik";
import ErrorMessage from "../ErrorMessage";
import AutoComplete from "../../AutoComplete";

const FormAutoCompleteField = ({ name, placeholder, type = "text" }) => {
  const { values, handleChange, setFieldTouched } = useFormikContext();
  return (
    <div className="form-field">
      <AutoComplete
        type={type}
        onChange={handleChange(name)}
        placeholder={placeholder}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
      />
      <ErrorMessage name={name} />
    </div>
  );
};

export default FormAutoCompleteField;
