import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { store } from '../redux/store';
import { RTLThemeProvider } from '../components/RTLProvider';
import { ChannelValueExample } from '../components/px-blue/data-display';

describe('ChannelValue test ', () => {
    it('Component renders correctly', () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <RTLThemeProvider>
                        <CssBaseline />
                        <ChannelValueExample />
                    </RTLThemeProvider>
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
