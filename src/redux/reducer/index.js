import { combineReducers } from "redux";
import {
  addContactReducer,
  editContactReducer,
  removeContactReducer,
} from "./contactReducer";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  allContact: addContactReducer,
  editableContact: editContactReducer,
  removableContact: removeContactReducer,
  form: formReducer,
});

export default reducers;
