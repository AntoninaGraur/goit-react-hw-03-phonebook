import React from 'react';


import { ContactMenu, DeleteBtn } from './ContactsList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ContactMenu>
    {contacts.map((contact) => (
      <li key={contact.id}>
        {contact.name}  :  {contact.number}
        <DeleteBtn onClick={() => onDeleteContact(contact.id)}>Delete</DeleteBtn>
      </li>
    ))}
  </ContactMenu>
);

export default ContactList;
