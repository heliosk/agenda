import React, { createContext, useReducer } from 'react';
import contactReducer from './contactReducer';

const initialState = {
  contacts: [
    // {
    //   id: '1212',
    //   name: 'Luke Skywalker',
    //   email: 'luke.skywalker@tatooine.com',
    //   phone: '362-2522-144',
    // },
  ],
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
