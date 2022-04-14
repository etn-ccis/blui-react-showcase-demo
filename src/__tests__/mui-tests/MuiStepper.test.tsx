import React from 'react';
import { cleanup, render } from '@testing-library/react';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { RTLThemeProvider } from '../../components/RTLProvider';
import { StepperExample } from '../../components/material-ui/navigation/Stepper';

describe('Channel value example', () => {
    afterEach(cleanup);
    it('renders without crashing', () => {
        render(
            <Provider store={store}>
                <RTLThemeProvider>
                    <CssBaseline />
                    <StepperExample />
                </RTLThemeProvider>
            </Provider>
        );
    });
});
