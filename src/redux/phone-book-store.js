import { configureStore } from '@reduxjs/toolkit';
import todosReduser from './todos/todos-reducer';

export const store = configureStore({
  reducer: {
    contacts: todosReduser,
  },
});
