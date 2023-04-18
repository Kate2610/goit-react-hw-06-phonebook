import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import appActions from "../redux/app/app-actions";

const App = () => {
  const contacts = useSelector((state) => state.app.contacts);
  const filter = useSelector((state) => state.app.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appActions.filterSet(""));
  }, [dispatch]);

  const filterArr = (fArr, filter) => {
    let newArr = fArr.filter((cur) =>
      cur.name.toUpperCase().includes(filter.toUpperCase())
    );
    return newArr;
  };

 const handleSubmit = (contactData) => {

  const existingContact = contacts.find(
    (contact) => contact.name.toLowerCase() === contactData.name.toLowerCase()
  );

  if (existingContact) {
    alert(`Contact with name "${existingContact.name}" already exists in phonebook`);
  } else {
    
    dispatch(appActions.addContact(contactData));
  }
};

  const handleDelete = (contactId) => {
    dispatch(appActions.deleteContact(contactId));
  };

  const handleFilterChange = (value) => {
    dispatch(appActions.filterSet(value));
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onSubmitData={handleSubmit} />
      <h2>Contacts</h2>
      <Filter setFilterValue={handleFilterChange} filterValue={filter} />
      <ContactList contacts={filterArr(contacts, filter)} del={handleDelete} />
    </div>
  );
};

export default App;
