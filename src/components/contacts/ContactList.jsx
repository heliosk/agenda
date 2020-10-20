import React, { useState } from 'react';
import ContactModal from './ContactModal';

import IcBook from '../../images/ic-book.svg';

const ContactList = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div id='contact-list-container'>
      <img src={IcBook} alt='contato' />
      <p>Nenhum contato foi criado ainda.</p>
      <button className='button primary' onClick={() => setShowModal(true)}>
        Criar contato
      </button>
      <ContactModal isOpen={showModal} closeModal={handleCloseModal} />
    </div>
  );
};

export default ContactList;
