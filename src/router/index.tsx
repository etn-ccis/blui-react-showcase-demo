import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { DrawerLayout } from '@pxblue/react-components';
import { NavigationDrawer } from './NavigationDrawer';
import { SharedAppBar } from '../components/SharedAppBar';
import { SimpleNavItem, pageDefinitions } from './navigation';

const buildRoutes = (routes: SimpleNavItem[], url: string): JSX.Element[] => {
    let ret: any[] = [];
    for (let i = 0; i < routes.length; i++) {
        if (routes[i].component) {
            ret.push(
                <Route exact path={`${url}${routes[i].url || ''}`} key={`${url}/${routes[i].url || ''}`}>
                    {routes[i].component}
                </Route>
            );
        }
        if (routes[i].pages) {
            ret = ret.concat(buildRoutes(routes[i].pages || [], `${url}${routes[i].url || ''}`));
        }
    }
    return ret;
};

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
                {buildRoutes(pageDefinitions, '')}

                <Route path="*">
                    <Redirect to={'/templates/dashboard'} />
                </Route>
            </Switch>
        </DrawerLayout>
    </Router>
);
