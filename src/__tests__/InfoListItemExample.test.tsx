import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { RTLThemeProvider } from '../components/RTLProvider';
import { InfoListItemExample } from '../components/px-blue/data-display/InfoListItem';

describe('Info list item example', () => {
    afterEach(cleanup);
    it('renders without crashing', () => {
        render(
            <Provider store={store}>
                <RTLThemeProvider>
                    <CssBaseline />
                    <InfoListItemExample />
                </RTLThemeProvider>
            </Provider>
        );
        // screen.debug();
    });
});
