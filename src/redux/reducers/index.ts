import { combineReducers } from 'redux';
import { AppReducer } from './app';
import { AppStore } from '../../__types__';

export const rootReducer = (): any =>
    combineReducers<AppStore>({
        app: AppReducer,
    });
