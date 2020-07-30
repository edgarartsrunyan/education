import { ADD_EDUCATION } from "../constants/actions";

export const addEducation = (education) => {
  return {
    type: ADD_EDUCATION,
    payload: education,
  };
};
