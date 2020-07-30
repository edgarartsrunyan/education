import React from "react";
import { CSSTransition } from "react-transition-group";
import * as Yup from "yup";

import Heading from "../../atoms/Heading";
import close from "../../../assets/images/close.svg";
import Form from "../Form";
import FormField from "../Form/FormField";

import "./style.scss";
import SubmitButton from "../Form/SubmitButton";
import FormAutoCompleteField from "../Form/FormAutoCompleteField";
import FormTextAreaField from "../Form/FormTextAreaField";
import { useDispatch } from "react-redux";
import { addEducation } from "../../../redux/actions/education";

const Modal = ({ show, onClose }) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    nameOfSchool: Yup.string().required().label("Name of School"),
    fieldOfStudy: Yup.string().required().label("Field of study"),
    startYear: Yup.number().required().label("Start year"),
  });

  const handleSubmit = (values) => {
    dispatch(addEducation(values));
    onClose();
  };

  return (
    <CSSTransition in={show} timeout={300} classNames="modal" unmountOnExit>
      <div className={"modal"}>
        <div className={"modal-black-window"} onClick={onClose} />
        <div className={"modal-wrapper"}>
          <img
            src={close}
            alt="close"
            className={"modal-wrapper-close-button"}
            onClick={onClose}
          />
          <Heading title={"New Education Modal"} size={"normal"} />

          <Form
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            initialValues={{
              nameOfSchool: "",
              fieldOfStudy: "",
              startYear: "",
              degree: "",
              grade: "",
              endYear: "",
            }}
          >
            <ul className={"modal-wrapper-inputs"}>
              <li className={"modal-wrapper-inputs-item"}>
                <FormAutoCompleteField
                  type={"text"}
                  name={"nameOfSchool"}
                  placeholder={"Name of School"}
                />
              </li>
              <li className={"modal-wrapper-inputs-item"}>
                <FormField
                  placeholder={"Field of study"}
                  name={"fieldOfStudy"}
                />
              </li>
              <li className={"modal-wrapper-inputs-item"}>
                <FormField placeholder={"Degree"} name={"degree"} />
              </li>
              <li className={"modal-wrapper-inputs-item"}>
                <FormField placeholder={"Grade"} name={"grade"} />
              </li>
              <li className={"modal-wrapper-inputs-item"}>
                <FormField
                  type={"number"}
                  placeholder={"Start year"}
                  name={"startYear"}
                />
              </li>
              <li className={"modal-wrapper-inputs-item"}>
                <FormField
                  type={"number"}
                  placeholder={"End Year (Or expected)"}
                  name={"endYear"}
                />
              </li>
              <li className={"modal-wrapper-inputs-item description"}>
                <FormTextAreaField
                  name={"description"}
                  placeholder={"Description"}
                />
              </li>
            </ul>
            <div className="modal-footer">
              <SubmitButton title={"Save"} />
            </div>
          </Form>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
