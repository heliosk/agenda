import React, { useState, useContext } from 'react';
import { ContactContext } from '../context/contactState';
import ContactModal from './contacts/ContactModal';
import ButtonWithIcon from './ButtonWithIcon';

import IcLogo from '../images/ic-logo.svg';
import IcSearch from '../images/ic-search.svg';

const Header = () => {
  const { contactState } = useContext(ContactContext);
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <header>
      <div className='logo'>
        <img src={IcLogo} alt='logo' />
      </div>
      <div className='create-user'>
        <ButtonWithIcon text='Criar contato' onClick={handleModal} />
      </div>
      <div className='search-box'>
        <input type='text' placeholder='Buscar...' />
        <img src={IcSearch} alt='buscar' />
      </div>
      <ContactModal isOpen={showModal} closeModal={handleModal} />
    </header>
  );
};

export default Header;
