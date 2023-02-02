import { combineReducers } from "redux";
import packs from "./packs";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
export default combineReducers({
  packs,
  errors,
  messages,
  auth,
});
