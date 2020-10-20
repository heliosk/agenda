import React, { useState, useContext, useRef } from 'react';
import { ContactContext } from '../context/contactState';
import * as types from '../context/types';
import ContactModal from './contacts/ContactModal';
import ButtonWithIcon from './ButtonWithIcon';

import IcLogo from '../images/ic-logo.svg';
import IcSearch from '../images/ic-search.svg';

const Header = () => {
  const { contactState, contactDispatch } = useContext(ContactContext);
  const [showModal, setShowModal] = useState(false);

  const text = useRef('');

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const onChange = () => {
    contactDispatch({
      type: types.FIND_CONTACT,
      payload: text.current.value,
    });
  };

  return (
    <header>
      <div className='logo'>
        <img src={IcLogo} alt='logo' />
      </div>
      <div className='create-user'>
        {contactState.contacts.length > 0 && (
          <ButtonWithIcon
            icon={<i className='fa fa-plus' aria-hidden='true'></i>}
            styles={'primary slim'}
            text='Criar contato'
            onClick={handleModal}
          />
        )}
      </div>
      <div className='search-box'>
        <input
          type='text'
          placeholder='Buscar...'
          onChange={onChange}
          ref={text}
        />
        <img src={IcSearch} alt='buscar' />
      </div>
      <ContactModal isOpen={showModal} closeModal={handleModal} />
    </header>
  );
};

export default Header;
