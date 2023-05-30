import React, { Component } from 'react';
import { nanoid } from 'nanoid';


import ContactForm from './Form/FormContacts';
import ContactList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Notiflix from 'notiflix';

import { FormContainer, FormTitle } from './Form/FormContacts.styled';

class App extends Component {
  state = {
   contacts: [],
    filter: ''
  };



  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }



 addContact = (name, number) => {
  const { contacts } = this.state;
  const existingContact = contacts.find((contact) =>
    contact.name.toLowerCase() === name.toLowerCase()
  );

  if (existingContact) {
    Notiflix.Notify.warning(`${name} is already in contacts.`);
    return;
  }




    const newContact = {
      id: nanoid(),
      name: name,
      number: number
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact]
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId)
    }));
  };

  changeFilter = (filter) => {
    this.setState({ filter: filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <FormContainer>
        <FormTitle>Phonebook</FormTitle>
        <ContactForm onAddContact={this.addContact} />
        <FormTitle>Contacts</FormTitle>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </FormContainer>
    );
  }
}

export default App;



//  stats: PropTypes.shape({
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//   }),