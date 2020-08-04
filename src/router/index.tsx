import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { DrawerLayout } from '@pxblue/react-components';
import { NavigationDrawer } from './NavigationDrawer';
import { App } from '../App';
import { SharedAppBar } from '../components/SharedAppBar';

const ScrollToTop = (): null => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export const MainRouter: React.FC = () => (
    <Router>
        <ScrollToTop />
        <DrawerLayout drawer={<NavigationDrawer />}>
            <SharedAppBar />
            <Switch>
                <Route path="*">
                    <App />
                </Route>
            </Switch>
        </DrawerLayout>
    </Router>
);
