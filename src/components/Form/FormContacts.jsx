import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FormInput, AddButton } from './FormContacts.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;

    this.props.onAddContact(name, number);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <p>Name</p>
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.handleChange}
        />
        <p>Number</p>
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={this.handleChange}
        />
        <AddButton type="submit">Add Contact</AddButton>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  stats: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  })
}

