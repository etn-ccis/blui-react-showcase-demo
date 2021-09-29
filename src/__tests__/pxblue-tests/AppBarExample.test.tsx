import React from 'react';
import { cleanup, render } from '@testing-library/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { RTLThemeProvider } from '../../components/RTLProvider';
import { PXBAppBarExample } from '../../components/px-blue/surfaces/AppBar';

describe('App bar example', () => {
    afterEach(cleanup);
    it('renders without crashing', () => {
        render(
            <Provider store={store}>
                <RTLThemeProvider>
                    <CssBaseline />
                    <PXBAppBarExample />
                </RTLThemeProvider>
            </Provider>
        );
    });
});
