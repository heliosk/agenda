import React from 'react';
import Header from '../components/Header';
import ContactList from '../components/contacts/ContactList';

const HomeScreen = () => {
  return (
    <div id='home-screen-container'>
      <Header />
      <ContactList />
    </div>
  );
};

export default HomeScreen;
