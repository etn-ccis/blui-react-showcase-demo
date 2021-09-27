import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { RTLThemeProvider } from '../../components/RTLProvider';
import { TabsExample } from '../../components/material-ui/navigation/Tabs';

describe('Channel value example', () => {
    afterEach(cleanup);
    it('renders without crashing', () => {
        render(
            <Provider store={store}>
                <RTLThemeProvider>
                    <CssBaseline />
                    <TabsExample />
                </RTLThemeProvider>
            </Provider>
        );
    });
});
