import { combineReducers } from "redux";
import { contactReducer } from "./contactReducer";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  allContact: contactReducer,
  form: formReducer,
});

export default reducers;
