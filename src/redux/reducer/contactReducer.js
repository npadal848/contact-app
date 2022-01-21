import { ActionTypes } from "../constant/ActionTypes";

const initialState = {
  contacts: [],
};

export const addContactReducer = (state = initialState, { type, payload }) => {
  console.log("In reducer");
  console.log(payload);
  console.log("TYPE: ", type);
  switch (type) {
    case ActionTypes.ADD_CONTACT:
      return { ...state, contacts: payload };
    default:
      return state;
  }
};

export const editContactReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.EDIT_CONTACT:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const removeContactReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.REMOVE_CONTACT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
