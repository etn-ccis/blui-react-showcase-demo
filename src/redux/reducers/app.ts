import { AppState } from '../../__types__';
import {
    OPEN_DRAWER,
    CLOSE_DRAWER,
    TOGGLE_DRAWER,
    LIGHT_THEME,
    DARK_THEME,
    TOGGLE_THEME,
    DIR_LTR,
    DIR_RTL,
    TOGGLE_DIR,
} from '../actions';

const initialAppState: AppState = {
    theme: 'light',
    direction: 'ltr',
    drawerOpen: true,
};
export const AppReducer = (state = initialAppState, action: any): AppState => {
    switch (action.type) {
        case OPEN_DRAWER:
            return {
                ...state,
                drawerOpen: true,
            };
        case CLOSE_DRAWER:
            return {
                ...state,
                drawerOpen: false,
            };
        case TOGGLE_DRAWER:
            return {
                ...state,
                drawerOpen: !state.drawerOpen,
            };
        case LIGHT_THEME:
            return {
                ...state,
                theme: 'light',
            };
        case DARK_THEME:
            return {
                ...state,
                theme: 'dark',
            };
        case TOGGLE_THEME:
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light',
            };
        case DIR_LTR:
            return {
                ...state,
                direction: 'ltr',
            };
        case DIR_RTL:
            return {
                ...state,
                direction: 'rtl',
            };
        case TOGGLE_DIR:
            return {
                ...state,
                direction: state.direction === 'ltr' ? 'rtl' : 'ltr',
            };
        default:
            return state;
    }
};
