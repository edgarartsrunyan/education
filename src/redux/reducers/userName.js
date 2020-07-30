import { ADD_USER_NAME } from "../constants/actions";

const initialState = {
  name: "",
};

export const userName = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
