import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { RTLThemeProvider } from '../../components/RTLProvider';
import { AppBarExample } from '../../components/material-ui/surfaces/AppBar';

describe('Channel value example', () => {
    afterEach(cleanup);
    it('renders without crashing', () => {
        render(
            <Provider store={store}>
                <RTLThemeProvider>
                    <CssBaseline />
                    <AppBarExample />
                </RTLThemeProvider>
            </Provider>
        );
    });
});
