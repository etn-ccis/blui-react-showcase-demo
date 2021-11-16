import React from 'react';
import {
    Alarms,
    Dashboard,
    DataDisplay,
    Feedback,
    Inputs,
    Navigation,
    BLUIDataDisplay,
    BLUISurfaces,
    Settings,
    Surfaces,
} from '../pages';
import { Layers, Category } from '@material-ui/icons';
import { PxblueSmall } from '@brightlayer-ui/icons-mui';

export type SimpleNavItem = {
    title: string;
    subtitle?: string;
    url?: string;
    icon?: JSX.Element;
    pages?: SimpleNavItem[];
    component?: JSX.Element;
    hidden?: boolean;
};

export const pageDefinitions: SimpleNavItem[] = [
    {
        title: 'Brightlayer UI Components',
        url: '/brightlayer-ui-components',
        icon: <PxblueSmall />,
        pages: [
            {
                title: 'Data Display',
                url: '/data-display-components',
                component: <BLUIDataDisplay />,
            },
            {
                title: 'Surfaces',
                url: '/surface-components',
                component: <BLUISurfaces />,
            },
        ],
    },
    {
        title: 'Material-UI Components',
        icon: <Category />,
        url: '/material-ui-components',
        pages: [
            {
                title: 'Data Display',
                url: '/data-display-components',
                component: <DataDisplay />,
            },

            {
                title: 'Feedback',
                url: '/feedback-components',
                component: <Feedback />,
            },
            {
                title: 'Inputs',
                url: '/input-components',
                component: <Inputs />,
            },
            {
                title: 'Navigation',
                url: '/navigation-components',
                component: <Navigation />,
            },
            {
                title: 'Surfaces',
                url: '/surface-components',
                component: <Surfaces />,
            },
        ],
    },
    {
        title: 'Page Templates',
        subtitle: 'Components in an app setting',
        url: '/templates',
        icon: <Layers />,
        pages: [
            {
                title: 'Alarms',
                url: '/alarms',
                component: <Alarms />,
            },
            {
                title: 'Dashboard',
                url: '/dashboard',
                component: <Dashboard />,
            },
            {
                title: 'Settings',
                url: '/settings',
                component: <Settings />,
            },
            // {
            //     title: 'Timeline',
            //     url: '/timeline',
            //     component: <Timeline />,
            // },
        ],
    },
];
