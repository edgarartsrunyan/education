import React, { useState } from "react";
import Input from "../../molecules/Input";

import "./style.scss";
import { findUniversityByName } from "../../../utils/requests/findUniverstyByName";

const AutoComplete = ({ placeholder, onChange, onBlur }) => {
  const [universityes, setUniversityes] = useState([]);
  const [value, setValue] = useState("");
  const handleChange = async (e) => {
    onChange(e.target.value);
    setValue(e.target.value);
    if (e.target.value.trim()) {
      const result = await findUniversityByName(e.target.value);
      setUniversityes(result);
    } else {
      setUniversityes([]);
    }
  };

  const handleCheckValue = (name) => {
    setValue(name);
    onChange(name);
    setUniversityes([]);
  };

  return (
    <div className={"auto-complete"}>
      <Input
        onChange={handleChange}
        placeholder={placeholder}
        className={"auto-complete-input"}
        value={value}
        onBlur={onBlur}
      />
      {universityes.length ? (
        <ul className={"auto-complete-values"}>
          {universityes.map((university, index) => (
            <li
              className={"auto-complete-values-items"}
              key={index}
              onClick={() => handleCheckValue(university.name)}
            >
              {university.name}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default AutoComplete;
