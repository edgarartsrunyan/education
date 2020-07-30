import React, { useState } from "react";

import "./style.scss";
import { useSelector } from "react-redux";
import Heading from "../../../components/atoms/Heading";
import Text from "../../../components/atoms/Text";

const EducationWrapper = () => {
  const educations = useSelector((state) => state.education.education);
  const [selectedItem, setSelectedItem] = useState(educations[0]);

  return (
    <div className={"container"}>
      <div className={"education-wrapper"}>
        <div className="education-wrapper-sidebar">
          <ul className={"education-wrapper-sidebar-wrapper"}>
            {educations.map((item) => (
              <li
                className={`education-wrapper-sidebar-wrapper-item ${
                  selectedItem.nameOfSchool === item.nameOfSchool
                    ? "active"
                    : ""
                }`}
                onClick={() => setSelectedItem(item)}
              >
                {item.nameOfSchool}
              </li>
            ))}
          </ul>
        </div>

        <div className={"education-wrapper-items"}>
          <div className="education-wrapper-items-header">
            <Heading title={selectedItem.fieldOfStudy} size={"normal"} />
            <Text
              text={`@${selectedItem.nameOfSchool}`}
              size={"normal"}
              className={"education-wrapper-items-header-name-of-school"}
            />
          </div>
          <Text
            text={`${selectedItem.startYear} - ${
              selectedItem.endYear ? selectedItem.endYear : "Present"
            }`}
            size={"small"}
            className={"education-wrapper-items-header-study-year"}
          />
          <div className={"education-wrapper-items-info"}>
            <div className={"education-wrapper-items-info-item"}>
              <Heading title={"Degree"} size={"small"} />
              <Text
                text={selectedItem.degree ? selectedItem.degree : <>-</>}
                size={"small"}
                className={"education-wrapper-items-info-item-text"}
              />
            </div>
            <div className={"education-wrapper-items-info-item"}>
              <Heading title={"Grade"} size={"small"} />
              <Text
                text={selectedItem.grade ? selectedItem.grade : <>-</>}
                size={"small"}
                className={"education-wrapper-items-info-item-text"}
              />
            </div>
          </div>

          <Heading title={"Description"} size={"small"} />
          <Text
            text={selectedItem.description ? selectedItem.description : <>-</>}
            size={"small"}
            className={"education-wrapper-items-info-item-text"}
          />
        </div>
      </div>
    </div>
  );
};

export default EducationWrapper;
