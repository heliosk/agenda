import React from 'react';
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

const ContactModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      id='contact-modal'
      isOpen={true}
      onRequestClose={closeModal}
      style={customStyles}>
      <div className='header'>
        <p>Criar novo contato</p>
      </div>
      <div className='body'>BODY</div>
      <div className='footer'>
        <button className='button default' onClick={closeModal}>
          Cancelar
        </button>
        <button className='button success' onClick={closeModal}>
          Salvar
        </button>
      </div>
    </Modal>
  );
};

export default ContactModal;
