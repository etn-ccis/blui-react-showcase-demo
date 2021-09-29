import React from 'react';
import { cleanup, render } from '@testing-library/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { RTLThemeProvider } from '../../components/RTLProvider';
import { ChannelValueExample } from '../../components/px-blue/data-display/ChannelValue';

describe('Channel value example', () => {
    afterEach(cleanup);
    it('renders without crashing', () => {
        render(
            <Provider store={store}>
                <RTLThemeProvider>
                    <CssBaseline />
                    <ChannelValueExample />
                </RTLThemeProvider>
            </Provider>
        );
    });
});
