import { combineReducers } from "redux";

import { userName } from "./userName";
import { education } from "./educations";

export const rootReducer = combineReducers({
  userName,
  education,
});
