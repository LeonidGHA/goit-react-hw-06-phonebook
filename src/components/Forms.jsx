import css from './App.module.css';
import { useState } from 'react';

import PropTypes from 'prop-types';

function Forms({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const textWrite = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);

        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onClickSubmit = e => {
    e.preventDefault();
    const data = {
      name,
      number,
    };
    onSubmit(data);

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form className={css.formStyle} onSubmit={onClickSubmit}>
      <input
        className={css.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Corben Dallas"
        value={name}
        onChange={textWrite}
      />
      <input
        className={css.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="+38-0__-__-__-__"
        value={number}
        onChange={textWrite}
      />
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

Forms.propTypes = {
  onSubmit: PropTypes.func,
};

export default Forms;
