import * as types from './types';

const contactReducer = (state, action) => {
  switch (action.type) {
    case types.ADD_CONTACT:
      console.log(action.payload);
      return {
        contacts: [...state.contacts, action.payload],
      };
    default:
      return state;
  }
};

export default contactReducer;
