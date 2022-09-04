import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import todosReduser from './todos/todos-reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistConfig = {
  key: 'items',
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, todosReduser);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
  middleware,
});

export const persistor = persistStore(store);
