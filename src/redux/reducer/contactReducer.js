import { ActionTypes } from "../constant/ActionTypes";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "S Simbba",
      email: "simbba@gmail.com",
      mobileNumber: "1231343445",
    },
    {
      id: 2,
      name: "Nagesh Padal",
      email: "nagesh@gmail.com",
      mobileNumber: "6545435465",
    },
    {
      id: 3,
      name: "Sivu Jack",
      email: "sivu@gmail.com",
      mobileNumber: "6723465466",
    },
    {
      id: 4,
      name: "Pooja Seth",
      email: "pooja@gmail.com",
      mobileNumber:"9776556577",
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

    case ActionTypes.UPDATE_CONTACT:
      const  {name, email, mobileNumber, id} = payload;
      const allContacts = state.contacts.filter((contact) => {
          if(contact.id == id){
              // contact.name = payload.name
              // contact.email = payload.email
              // contact.mobileNumber = payload.mobileNumber
              contact.name = name
              contact.email = email
              contact.mobileNumber = mobileNumber

          }
          return contact
      })
     
      return {
         ...state,
         contacts : allContacts  // same reference as well as same sate it is uipdateing
          
      };
    case ActionTypes.REMOVE_CONTACT:
      return { ...state, contacts: payload };
    default:
      return state;
  }
};
