import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { RTLThemeProvider } from '../../components/RTLProvider';
import { Dashboard } from '../../pages/contextual-page-templates/Dashboard';

describe('App bar example', () => {
    afterEach(cleanup);
    test('renders without crashing', () => {
        render(
            <Provider store={store}>
                <RTLThemeProvider>
                    <CssBaseline />
                    <Dashboard />
                </RTLThemeProvider>
            </Provider>
        );
    });
});
