import css from './App.module.css';
import PropTypes from 'prop-types';
function Filter({ onWrite, value }) {
  return (
    <input
      type="text"
      className={css.input}
      name="filter"
      placeholder="Serch Contacts"
      value={value}
      onChange={onWrite}
    />
  );
}

Filter.propTypes = {
  onWrite: PropTypes.func,
};
export default Filter;
