import React, { useState } from 'react';
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //add localstorage
    console.log(formData);
  };

  const checkEmptyForm = () => {
    return Object.values(formData).every((x) => x === '');
  };

  return (
    <Modal
      id='contact-modal'
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}>
      <form onSubmit={handleSubmit}>
        <div className='header'>
          <p>Criar novo contato</p>
        </div>
        <div className='body'>
          <div>
            <label htmlFor='name'>Nome</label>
            <input
              name='name'
              type='text'
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='email'>E-mail</label>
            <input
              name='email'
              type='email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='phone'>Telefone</label>
            <input
              name='phone'
              type='text'
              className='phone'
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='footer'>
          <button className='button default' onClick={closeModal}>
            Cancelar
          </button>
          <button
            type='submit'
            className={`button ${checkEmptyForm() ? 'disabled' : 'success'}`}
            disabled={checkEmptyForm()}>
            Salvar
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ContactModal;
