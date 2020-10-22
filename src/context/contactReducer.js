import * as types from './types';

const contactReducer = (state, action) => {
  switch (action.type) {
    case types.ADD_CONTACT:
      return {
        contacts: [...state.contacts, action.payload],
      };

    case types.FIND_CONTACT:
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return (
            contact.name.match(regex) ||
            contact.email.match(regex) ||
            contact.phone.match(regex)
          );
        }),
      };

    case types.UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };

    case types.CURRENT_CONTACT:
      return {
        ...state,
        current: action.payload,
      };

    case types.CLEAR_CURRENT_CONTACT: {
      return {
        ...state,
        current: null,
      };
    }

    case types.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default contactReducer;
