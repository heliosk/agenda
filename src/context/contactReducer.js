import * as types from './types';

const contactReducer = (state, action) => {
  switch (action.type) {
    case types.ADD_CONTACT:
      console.log(action.payload);
      return {
        contacts: [...state.contacts, action.payload],
      };
    case types.UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    default:
      return state;
  }
};

export default contactReducer;
