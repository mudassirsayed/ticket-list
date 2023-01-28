import { combineReducers } from "redux";
import userReducers from "./reducer";

const rootReducder = combineReducers({
  data: userReducers,
});

export default rootReducder;
