import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./app-actions";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const contacts = createReducer([...initialContacts], {
  [actions.addContact]: (state, { type, payload }) => {
    let nameArray = state.map((cur) => cur.name);
    if (!nameArray.includes(payload.name)) {
      return [...state, payload];
    } else {
      alert("Contact with the same name already exists");
      return state;
    }
  },
  [actions.deleteContact]: (state, { types, payload }) => {
    let newArrAfterDel = state.filter((elem) => elem.id !== payload);
    return [...newArrAfterDel];
  },
});

const filter = createReducer("", {
  [actions.filterSet]: (_, { payload }) => {
    return payload;
  },
});

export default combineReducers({ contacts, filter });
