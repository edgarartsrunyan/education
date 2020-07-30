import React from "react";
import { CSSTransition } from "react-transition-group";

import "./style.scss";
import Heading from "../../atoms/Heading";
import close from "../../../assets/images/close.svg";
import Input from "../../molecules/Input";
import TextArea from "../../molecules/TextArea";
import Button from "../../molecules/Button";

const Modal = ({ show, onClose }) => {
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

          <ul className={"modal-wrapper-inputs"}>
            <li className={"modal-wrapper-inputs-item"}>
              <Input
                type={"text"}
                onChange={() => {}}
                placeholder={"Name of School"}
              />
            </li>
            <li className={"modal-wrapper-inputs-item"}>
              <Input
                type={"text"}
                onChange={() => {}}
                placeholder={"Field of study"}
              />
            </li>
            <li className={"modal-wrapper-inputs-item"}>
              <Input type={"text"} onChange={() => {}} placeholder={"Degree"} />
            </li>
            <li className={"modal-wrapper-inputs-item"}>
              <Input type={"text"} onChange={() => {}} placeholder={"Grade"} />
            </li>
            <li className={"modal-wrapper-inputs-item"}>
              <Input
                type={"text"}
                onChange={() => {}}
                placeholder={"Start year"}
              />
            </li>
            <li className={"modal-wrapper-inputs-item"}>
              <Input
                type={"text"}
                onChange={() => {}}
                placeholder={" End Year (Or expected)"}
              />
            </li>
            <li className={"modal-wrapper-inputs-item description"}>
              <TextArea
                type={"text"}
                onChange={() => {}}
                placeholder={" End Year (Or expected)"}
              />
            </li>
          </ul>

          <div className="modal-footer">
            <Button onClick={() => {}} title={"Save"} />
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
