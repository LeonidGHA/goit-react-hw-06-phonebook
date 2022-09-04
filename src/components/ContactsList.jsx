import css from './App.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import todosActions from 'redux/todos/todos-actions';
function ContactsList({ renderFilterContacts }) {
  const dispatch = useDispatch();
  const renderContact = renderFilterContacts.map(({ id, name, number }) => (
    <li className={css.item} key={id}>
      {name} : {number}
      <button
        className={css.listBtn}
        type="button"
        onClick={e => dispatch(todosActions.deleteContact(e.target.id))}
        id={id}
      >
        X
      </button>
    </li>
  ));

  return <ul className={css.list}>{renderContact}</ul>;
}

ContactsList.propTypes = {
  renderFilterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;
