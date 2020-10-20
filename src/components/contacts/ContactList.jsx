import React, { useState, useContext } from 'react';
import { ContactContext } from '../../context/contactState';
import ContactModal from './ContactModal';
import ButtonWithIcon from '../ButtonWithIcon';

import IcBook from '../../images/ic-book.svg';

const ContactList = () => {
  const { contactState } = useContext(ContactContext);
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div id='contact-list-container'>
      <div id='contact-create'>
        <img src={IcBook} alt='contato' />
        <p>Nenhum contato foi criado ainda.</p>
        <ButtonWithIcon text='Criar contato' onClick={handleModal} />
      </div>

      <div>
        {contactState.contacts.map((u) => {
          return u.name;
        })}
      </div>

      <ContactModal isOpen={showModal} closeModal={handleModal} />
    </div>
  );
};

export default ContactList;
