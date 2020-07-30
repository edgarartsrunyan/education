import React, { useState } from "react";

import "./style.scss";
import Heading from "../../components/atoms/Heading";
import { useSelector } from "react-redux";
import Button from "../../components/molecules/Button";
import Text from "../../components/atoms/Text";
import Modal from "../../components/organizms/Modal";
import EducationWrapper from "./EducationWrapper";

const Education = () => {
  const name = useSelector((state) => state.userName.name);
  const educations = useSelector((state) => state.education.education);

  const [showModal, setShowModal] = useState(false);

  console.log("educations", educations);

  return (
    <>
      <Modal show={showModal} onClose={() => setShowModal(false)} />
      <div className={"education"}>
        <Heading title={`Welcome to ${name}'s educations page`} size={"big"} />
        <Button
          title={"Add new education"}
          onClick={() => setShowModal(true)}
          className={"education-button"}
        />

        {!educations.length ? (
          <Text
            size={"big"}
            className={"education-empty-text"}
            text={"You have not added educations yet, please add new education"}
          />
        ) : (
          <EducationWrapper />
        )}
      </div>
    </>
  );
};

export default Education;
