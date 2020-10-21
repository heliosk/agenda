import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputMask from 'react-input-mask';
import Modal from 'react-modal';
import { ContactContext } from '../../context/contactState';
import * as types from '../../context/types';

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

const ContactModal = ({ isOpen, closeModal, currentId }) => {
  const { contactState, contactDispatch } = useContext(ContactContext);
  const [isEditMode, setIsEditMode] = useState(false);

  const initialState = {
    id: uuidv4(),
    name: '',
    email: '',
    phone: '',
  };

  const [formData, setFormData] = useState(initialState);

  const afterOpenModal = async () => {
    if (currentId) {
      const editContact = await contactState.contacts.filter((contact) => {
        return contact.id === currentId;
      });

      const { id, name, email, phone } = editContact[0];
      setFormData({ ...formData, id, name, email, phone });
      setIsEditMode(true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCloseModal = () => {
    setFormData(initialState);
    closeModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { id, name, email, phone } = formData;

    if (isEditMode) {
      contactDispatch({
        type: types.UPDATE_CONTACT,
        payload: {
          id,
          name,
          email,
          phone,
        },
      });
    } else {
      contactDispatch({
        type: types.ADD_CONTACT,
        payload: {
          id,
          name,
          email,
          phone,
        },
      });
    }

    handleCloseModal();
  };

  const checkEmptyForm = () => {
    return Object.values(formData).every((item) => item === '');
  };

  return (
    <Modal
      appElement={document.getElementById('root')}
      id='contact-modal'
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
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
            <InputMask
              mask='(99)99999-9999'
              name='phone'
              type='text'
              className='phone'
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='footer'>
          <button className='button default' onClick={handleCloseModal}>
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
