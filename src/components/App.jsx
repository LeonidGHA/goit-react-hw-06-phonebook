import Notiflix from 'notiflix';
import css from './App.module.css';

import Forms from './Forms';
import ContactsList from './ContactsList';
import Filter from './Filter';

import { useDispatch, useSelector } from 'react-redux';
import todosActions from 'redux/todos/todos-actions';

function App() {
  const dispatch = useDispatch();
  const contactsArr = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.contacts.filter);

  const submitDataForm = data => {
    const { name, number } = data;
    if (contactsArr.find(el => el.name === name || el.number === number)) {
      Notiflix.Report.warning(
        `Warning`,
        `${name} or ${number} is already in cotacts`,
        'Okay'
      );
      return;
    }
    Notiflix.Notify.success('You have a new Contact');

    dispatch(todosActions.addContact(name, number));
  };

  const filterState = () => {
    return contactsArr.filter(el =>
      el.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };
  const renderFiterItem = filterState();

  // const deleteContacts = e => {
  //   Notiflix.Notify.success('Contact is delete');
  //   return dispatch(todosActions.deleteContact(e.target.id));
  // };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <Forms onSubmit={submitDataForm} />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      {contactsArr.length !== 0 && (
        <ContactsList renderFilterContacts={renderFiterItem} />
      )}
    </div>
  );
}

export default App;
