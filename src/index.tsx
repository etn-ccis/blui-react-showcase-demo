/**
 Copyright (c) 2021-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
import React from 'react';
import ReactDOMClient from 'react-dom/client';
import * as serviceWorker from './serviceWorker';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import './index.css';
import { MainRouter } from './router';
import { store } from './redux/store';
import { RTLThemeProvider } from './components/RTLProvider';
import '@brightlayer-ui/react-themes/open-sans';

// eslint-disable-arrow-body-style
const container = document.getElementById('root');

if (!container) throw new Error('Root Element was not found in the DOM');

const root = ReactDOMClient.createRoot(container);

root.render(
    <Provider store={store}>
        <RTLThemeProvider>
            <CssBaseline />
            <MainRouter />
        </RTLThemeProvider>
    </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
