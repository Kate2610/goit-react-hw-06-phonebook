import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from 'redux/contacts/slice';
import { getContacts } from 'redux/contacts/selectors';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const existingContact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (existingContact) {
      alert(`${name} already exists`);
    } else {
      dispatch(
        addContacts({
          id: nanoid(),
          name: name,
          number: number,
        })
      );

      setName('');
      setNumber('');
    }
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          required
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          required
        />
      </label>

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
