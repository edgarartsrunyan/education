import React, { useState } from "react";

import Heading from "../../components/atoms/Heading";
import Text from "../../components/atoms/Text";

import "./style.scss";
import Input from "../../components/molecules/Input";
import Button from "../../components/molecules/Button";
import { useDispatch } from "react-redux";
import { addUserName } from "../../redux/actions/userName";

const WelcomePage = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleSave = () => {
    if (name.trim()) {
      dispatch(addUserName(name));
    }
  };

  return (
    <div className={"welcome-page"}>
      <Heading
        title={"Hi there! Welcome to your education showcase"}
        size={"big"}
      />
      <Text
        size={"big"}
        text={'Type your name and click "Enter" below to begin!'}
        className={"welcome-page-subtitle"}
      />
      <Input
        placeholder={"Your Name"}
        className={"welcome-page-input"}
        onChange={(e) => setName(e.target.value)}
      />
      <Button title={"Enter"} onClick={handleSave} disabled={!name} />
    </div>
  );
};

export default WelcomePage;
