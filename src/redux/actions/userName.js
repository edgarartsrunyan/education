import { ADD_USER_NAME } from "../constants/actions";

export const addUserName = (name) => {
  return {
    type: ADD_USER_NAME,
    payload: name,
  };
};
