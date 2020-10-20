import React from 'react';
import { ContactProvider } from '../context/contactState';
import Header from '../components/Header';
import ContactList from '../components/contacts/ContactList';

const HomeScreen = () => {
  return (
    <ContactProvider>
      <div id='home-screen-container'>
        <Header />
        <ContactList />
      </div>
    </ContactProvider>
  );
};

export default HomeScreen;
