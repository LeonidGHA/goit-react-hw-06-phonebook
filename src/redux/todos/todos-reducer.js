import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import action from './todos-actions';

const items = createReducer([], {
  [action.addContact]: (state, { payload }) => [...state, payload],
  [action.deleteContact]: (state, { payload }) =>
    state.filter(el => el.id !== payload),
});

const filter = createReducer('', {
  [action.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
