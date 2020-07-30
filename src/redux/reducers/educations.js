import { ADD_EDUCATION } from "../constants/actions";

const initialState = {
  education: [
    {
      nameOfSchool: "Ahvaz University of Medical Sciences",
      fieldOfStudy: "Study",
      startYear: 1234,
      degree: "aaaaa",
      grade: "assssss",
      endYear: "",
      description: "asasasas",
    },
  ],
};

export const education = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EDUCATION:
      return {
        ...state,
        education: [action.payload, ...state.education],
      };
    default:
      return state;
  }
};
