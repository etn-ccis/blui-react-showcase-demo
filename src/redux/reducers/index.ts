import { combineReducers } from 'redux';
import { AppReducer } from './app';

export const rootReducer = combineReducers({
    app: AppReducer,
});
