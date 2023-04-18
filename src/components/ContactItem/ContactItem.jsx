import { useDispatch } from 'react-redux';
import { removeContacts } from 'redux/contacts/slice';
import s from './ContactItem.module.css';

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(removeContacts(id));
  };

  return (
    <>
      <span>
        {name}: {number}
      </span>
      <button className={s.button} type="submit" name={name} onClick={handleDeleteClick}>
        Delete
      </button>
    </>
  );
}
