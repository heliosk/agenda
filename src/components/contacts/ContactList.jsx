import React, { useState, useContext, useMemo } from 'react';
import { ContactContext } from '../../context/contactState';
import ContactModal from './ContactModal';
import ButtonWithIcon from '../ButtonWithIcon';

import IcBook from '../../images/ic-book.svg';
import { useTable } from 'react-table';
import ContactRemoveModal from './ContactRemoveModal';

const ContactList = () => {
  const { contactState } = useContext(ContactContext);
  const [showModal, setShowModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const tableColumns = [
    {
      Header: '',
      accessor: 'avatar',
    },
    {
      Header: 'Nome',
      accessor: 'name',
    },
    {
      Header: 'E-mail',
      accessor: 'email',
    },
    {
      Header: 'Telefone',
      accessor: 'phone',
    },
    {
      Header: '',
      accessor: 'options',
    },
  ];

  const handleModal = () => {
    if (showModal) {
      setCurrentId(null);
    }

    setShowModal(!showModal);
  };

  const handleRemoveModal = () => {
    if (showRemoveModal) {
      setCurrentId(null);
    }

    setShowRemoveModal(!showRemoveModal);
  };

  const onClickEdit = (id) => {
    setCurrentId(id);
    setShowModal(true);
  };

  const onClickDelete = (id) => {
    setCurrentId(id);
    setShowRemoveModal(true);
  };

  const Table = () => {
    const currentData = contactState.filtered
      ? contactState.filtered
      : contactState.contacts;

    const columns = useMemo(() => tableColumns, []);
    const data = useMemo(() => currentData, [currentData]);

    const tableInstance = useTable({
      columns,
      data,
    });

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = tableInstance;

    return (
      <table {...getTableProps()} className='contact-table'>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  console.log(cell.row.original.id);
                  return cell.column.id === 'options' ? (
                    <td {...cell.getCellProps()}>
                      <div className='contact-options'>
                        <i
                          className='fas fa-pencil-alt'
                          onClick={() => onClickEdit(cell.row.original.id)}></i>
                        <i
                          className='fas fa-trash-alt'
                          onClick={() =>
                            onClickDelete(cell.row.original.id)
                          }></i>
                      </div>
                    </td>
                  ) : (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <div id='contact-list-container'>
      {contactState.contacts.length < 1 ? (
        <div id='contact-create'>
          <img src={IcBook} alt='contato' />
          <p>Nenhum contato foi criado ainda.</p>
          <ButtonWithIcon
            icon={<i className='fa fa-plus' aria-hidden='true'></i>}
            styles={'primary'}
            text='Criar contato'
            onClick={handleModal}
          />
        </div>
      ) : (
        <Table />
      )}
      <ContactModal
        isOpen={showModal}
        closeModal={handleModal}
        currentId={currentId}
      />
      <ContactRemoveModal
        isOpen={showRemoveModal}
        closeModal={handleRemoveModal}
        currentId={currentId}
      />
    </div>
  );
};

export default ContactList;
