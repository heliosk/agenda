import React, { createContext, useReducer } from 'react';
import contactReducer from './contactReducer';
import * as types from './types';

const initialState = {
  contacts: [],
};

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contactReducer, initialState);

  const addContact = ({ id, name, email, phone }) => {
    dispatch({
      type: types.ADD_CONTACT,
      payload: {
        id,
        name,
        email,
        phone,
      },
    });
  };

  const updateContact = ({ id, name, email, phone }) => {
    dispatch({
      type: types.UPDATE_CONTACT,
      payload: {
        id,
        name,
        email,
        phone,
      },
    });
  };

  const getContact = (text) => {
    dispatch({
      type: types.FIND_CONTACT,
      payload: text,
    });
  };

  const deleteContact = (id) => {
    dispatch({
      type: types.DELETE_CONTACT,
      payload: id,
    });
  };

  const setCurrentContact = (data) => {
    dispatch({
      type: types.CURRENT_CONTACT,
      payload: data,
    });
  };

  const clearCurrentContact = () => {
    dispatch({ type: types.CLEAR_CURRENT_CONTACT });
  };

  return (
    <ContactContext.Provider
      value={{
        contactState: state,
        addContact,
        updateContact,
        getContact,
        deleteContact,
        setCurrentContact,
        clearCurrentContact,
      }}>
      {children}
    </ContactContext.Provider>
  );
};
