import "../css/App.css";
import ListContacts from "./ListContacts";
import { useState, useEffect } from "react";
import React from "react";
import * as ContactsApi from "../utils/ContactsAPI"
import CreateContact from "./CreateContact";
import { Routes, Route, useNavigate } from "react-router-dom";

const App = () => {

  let navigate = useNavigate();

  function deleteContact(contact) {
    setContacts(contacts.filter(c => c.id !== contact.id))
  }

  const createContact = (contact) => {
    const create = async () => {
      const res = await ContactsApi.create(contact)
      setContacts(contacts.concat(res))
    }
    create();
    navigate("/");
  }

  const [contacts, setContacts] = useState([])

  useEffect(() => {
    const getContacts = async () => {
      const res = await ContactsApi.getAll()
      setContacts(res)
    }

    getContacts()
  }, [])

  return (
    <Routes>
      <Route exact path="/" element={
        <ListContacts contacts={contacts} onDeleteContact={deleteContact} />
      } />
      <Route path="/create" element={<CreateContact onCreateContact={(contact) => createContact(contact)} />} />
    </Routes>
  )
};

export default App;
