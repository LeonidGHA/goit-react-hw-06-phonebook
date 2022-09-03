import { createAction, nanoid } from '@reduxjs/toolkit';

const addContact = createAction('todos/add', (name, number) => ({
  payload: {
    name,
    number,
    id: nanoid(5),
  },
}));

const deleteContact = createAction('todos/delete');

const changeFilter = createAction('todos/filter');

const todosActions = { addContact, changeFilter, deleteContact };
export default todosActions;
