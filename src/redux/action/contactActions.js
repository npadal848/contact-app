import { ActionTypes } from "../constant/ActionTypes";

export const addContact = (contact) => {
  return {
    type: ActionTypes.ADD_CONTACT,
    payload: contact,
  };
};

export const getContact = (contact) => {
  return {
    type: ActionTypes.GET_CONTACT,
    payload: contact,
  };
};

export const updateContact = (contact) => {
  return {
    type: ActionTypes.UPDATE_CONTACT,
    payload: contact,
  };
};

export const removeContact = (contact) => {
  return {
    type: ActionTypes.REMOVE_CONTACT,
    payload: contact,
  };
};
