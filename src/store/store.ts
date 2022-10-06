import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './rootReducer';
import { rootWatcher } from './saga';
import {createWrapper} from "next-redux-wrapper";

export const store = () => {
  const sagaMiddleware = createSagaMiddleware();

  const reduxStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware({serializableCheck: true}).concat(sagaMiddleware)
    ),
  });

  sagaMiddleware.run(rootWatcher);

  return reduxStore;
};

export const wrapper = createWrapper(store);