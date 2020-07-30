import { ADD_EDUCATION } from "../constants/actions";

const initialState = {
  education: [],
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
