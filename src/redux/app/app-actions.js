
import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';



const addContact = createAction("app/addContact", (contactData) => {
  return {
    payload: {
      id: uuidv4(),
      name: contactData.name.toLowerCase(),
      number: contactData.number,
    },
  };
});

const deleteContact = createAction("app/deleteContact");

const filterSet = createAction("app/setFilterArr");

const actions = { addContact, deleteContact, filterSet };
export default actions;