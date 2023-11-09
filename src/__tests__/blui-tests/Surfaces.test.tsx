import CssBaseline from '@mui/material/CssBaseline';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { store } from '../../redux/store';
import { RTLThemeProvider } from '../../components/RTLProvider';
import * as components from '../../components/brightlayer-ui/surfaces/index';

Object.keys(components).forEach((componentName) => {
    const Component = components[componentName as keyof typeof components];
    describe(`Component: ${componentName}`, () => {
        test(`${componentName} renders examples correctly`, () => {
            const tree = renderer
                .create(
                    <Provider store={store}>
                        <RTLThemeProvider>
                            <CssBaseline />
                            <Component />
                        </RTLThemeProvider>
                    </Provider>
                )
                .toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
