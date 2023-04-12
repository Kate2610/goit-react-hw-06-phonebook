import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const contactsFromLocalStorage = localStorage.getItem("contacts");
    if (contactsFromLocalStorage) {
      setContacts(JSON.parse(contactsFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (data) => {
    repeatControl(data);
  };

  const repeatControl = (data) => {
    const nameArray = contacts.map((cur) => cur.name.toLowerCase());
    if (!nameArray.includes(data.name.toLowerCase())) {
      const newContacts = [
        ...contacts,
        { id: uuidv4(), name: data.name, number: data.number },
      ];
      setContacts(newContacts);
    } else {
      alert("A contact with the same name already exists");
    }
  };

  const deleteContactFromContactList = (idContact) => {
    const newArrAfterDel = contacts.filter((elem) => elem.id !== idContact);
    setContacts(newArrAfterDel);
  };

  const filterArr = () => {
    const filteredContacts = contacts.filter((cur) =>
      cur.name.toUpperCase().includes(filter.toUpperCase())
    );
    return filteredContacts;
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onSubmitData={formSubmitHandler} />
      <h1>Contacts</h1>
      <Filter setFilterToState={setFilter} />
      <ContactList
        contacts={filterArr()}
        del={deleteContactFromContactList}
      />
    </div>
  );
}

export default App;
