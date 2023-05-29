import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

import ContactForm from './Form/FormContacts';
import ContactList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Notiflix from 'notiflix';

import { FormContainer, FormTitle } from './Form/FormContacts.styled';

class App extends Component {
  state = {
   contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: ''
  };

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