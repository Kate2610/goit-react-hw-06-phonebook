import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const ContactList = ({ contacts, del }) => {
  const deleteId = (id) => {
    del(id);
  };

  const createList = () => {
    return contacts.map((contact) => {
      return (
        <li key={uuidv4()} id={contact.id}>
          {`${contact.name}: ${contact.number}`}
          <button data-id={contact.id} onClick={() => deleteId(contact.id)}>
            Delete
          </button>
        </li>
      );
    });
  };

  return <ul>{createList()}</ul>;
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })).isRequired,
  del: PropTypes.func.isRequired,
};

ContactList.defaultProps = {
  contacts: [],
};

export default ContactList;
