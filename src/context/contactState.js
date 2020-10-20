import React, { createContext, useReducer } from 'react';
import contactReducer from './contactReducer';

const initialState = {
  contacts: [],
};

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <ContactContext.Provider
      value={{ contactState: state, contactDispatch: dispatch }}>
      {children}
    </ContactContext.Provider>
  );
};
