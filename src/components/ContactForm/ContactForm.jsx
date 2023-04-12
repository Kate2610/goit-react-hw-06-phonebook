import style from './ContactForm.module.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ContactForm = ({ onSubmitData }) => {
const [name, setName] = useState('');
const [number, setNumber] = useState('');

const handleChange = event => {
const { name, value } = event.currentTarget;
if (name === 'name') {
setName(value);
} else if (name === 'number') {
setNumber(value);
}
};

const handleSubmit = event => {
event.preventDefault();
let contactForAdd = { name, number };
onSubmitData(contactForAdd);
reset();
};

const reset = () => {
setName('');
setNumber('');
};

return (
<div className={style.contactform}>
<form type="submit" onSubmit={handleSubmit}>
<label>
Name
<input
         type="text"
         name="name"
         required
         onChange={handleChange}
         value={name}
       />
</label>
<label>
Number
<input
         type="tel"
         name="number"
         required
         onChange={handleChange}
         value={number}
       />
</label>
<button type="submit">Add contact</button>
  </form>
</div>
);
};

ContactForm.propTypes = {
onSubmitData: PropTypes.func.isRequired,
};

export default ContactForm;





