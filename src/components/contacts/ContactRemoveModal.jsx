import React, { useContext } from 'react';
import { ContactContext } from '../../context/contactState';
import * as types from '../../context/types';
import Modal from 'react-modal';

const customStyles = {
  content: {
    padding: 0,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 16px 10px 0 rgba(0, 0, 0, 0.16)',
    borderRadius: '16px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
};

const ContactRemoveModal = ({ isOpen, closeModal, currentId }) => {
  const { contactDispatch } = useContext(ContactContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    contactDispatch({
      type: types.DELETE_CONTACT,
      payload: currentId,
    });

    closeModal();
  };

  return (
    <Modal
      appElement={document.getElementById('root')}
      id='contact-remove-modal'
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}>
      <form onSubmit={handleSubmit}>
        <div className='header'>
          <p>Excluir contato</p>
        </div>
        <div className='body'>Deseja realmente excluir este contato?</div>
        <div className='footer'>
          <button className='button default' onClick={closeModal}>
            Cancelar
          </button>
          <button type='submit' className='button success'>
            Excluir
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ContactRemoveModal;
