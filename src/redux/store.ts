import { configureStore } from '@reduxjs/toolkit';
import { rootReducer as AppReducer } from './reducers';

export const store = configureStore({ reducer: AppReducer });
