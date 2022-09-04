import css from './App.module.css';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import todosActions from 'redux/todos/todos-actions';

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.contacts.filter);
  return (
    <input
      type="text"
      className={css.input}
      name="filter"
      placeholder="Serch Contacts"
      value={filterValue}
      onChange={e => dispatch(todosActions.changeFilter(e.target.value))}
    />
  );
}

Filter.propTypes = {
  filterValue: PropTypes.string,
};
export default Filter;
