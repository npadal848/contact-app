import { ActionTypes } from "../constant/ActionTypes";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "Simbba",
      email: "simbba@gmail.com",
      mobileNumber: 1231343445,
    },
    {
      id: 2,
      name: "Nagesh",
      email: "nagesh@gmail.com",
      mobileNumber: 6545435465,
    },
    { id: 3, name: "Sivu", email: "sivu@gmail.com", mobileNumber: 6723465466 },
    {
      id: 4,
      name: "Pooja",
      email: "pooja@gmail.com",
      mobileNumber: 9776556577,
    },
  ],
  editableContact: {},
};

export const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, payload],
      };
    case ActionTypes.GET_CONTACT:
      return { ...state, editableContact: payload };
    case ActionTypes.EDIT_CONTACT:
      return { ...state, contacts: payload };
    case ActionTypes.REMOVE_CONTACT:
      return { ...state, contacts: payload };
    default:
      return state;
  }
};
