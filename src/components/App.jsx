import { useState, useEffect } from 'react';

import Notiflix from 'notiflix';
import css from './App.module.css';

import Forms from './Forms';
import ContactsList from './ContactsList';
import Filter from './Filter';

import { useDispatch } from 'react-redux';
import todosActions from 'redux/todos/todos-actions';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const localContacts = localStorage.getItem('contacts');
    const localParsedCont = JSON.parse(localContacts);
    if (localParsedCont) {
      setContacts(localParsedCont);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const submitDataForm = data => {
    if (contacts.find(el => el.name === data.name)) {
      Notiflix.Report.warning(
        `Warning`,
        `${data.name} is already in cotacts`,
        'Okay'
      );
      return;
    }
    Notiflix.Notify.success('You have a new Contact');
    console.log(data);
    setContacts(prevState => [...prevState, data]);
  };

  const textFilterWrite = e => {
    setFilter(e.target.value);
  };

  const filterState = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const renderFiterItem = filterState();

  const deleteContacts = e => {
    // const newArr = contacts.filter(el => el.id !== e.target.id);
    // Notiflix.Notify.success('Contact is delete');
    // return setContacts(newArr);
    console.log(e.target);
    return dispatch(todosActions.deleteContact(e.target.id));
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <Forms onSubmit={submitDataForm} />
      <h2 className={css.title}>Contacts</h2>
      <Filter onWrite={textFilterWrite} value={filter} />
      {/* {contacts.length !== 0 && (
        <ContactsList
          contacts={renderFiterItem}
          deleteContacts={deleteContacts}
        />
      )} */}
      <ContactsList
        contacts={renderFiterItem}
        deleteContacts={deleteContacts}
      />
    </div>
  );
}

export default App;
