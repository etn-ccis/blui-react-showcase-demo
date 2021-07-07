import React from 'react';
import {
    Alarms,
    Dashboard,
    DataDisplay,
    Feedback,
    Inputs,
    Navigation,
    PXBlueComponents,
    Settings,
    Surfaces,
    Timeline,
} from '../pages';
import { Layers, Category } from '@material-ui/icons';
import { PxblueSmall } from '@pxblue/icons-mui';

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
                title: 'PX Blue Components',
                url: '/pxblue-components',
                icon: <PxblueSmall />,
                component: <PXBlueComponents />,
            },
            {
                title: 'Material-UI Components',
                icon: <Category />,
                pages: [
                    {
                        title: 'Inputs',
                        url: '/material-input-components',
                        component: <Inputs />,
                    },
                    {
                        title: 'Navigation',
                        url: '/material-navigation-components',
                        component: <Navigation />,
                    },
                    {
                        title: 'Surfaces',
                        url: '/material-surface-components',
                        component: <Surfaces />,
                    },
                    {
                        title: 'Feedback',
                        url: '/material-feedback-components',
                        component: <Feedback />,
                    },
                    {
                        title: 'Data Display',
                        url: '/material-data-display-components',
                        component: <DataDisplay />,
                    },
                ],
            },
    {
        
        title: 'Page Templates',
        subtitle: 'Components in an app setting',
        icon: <Layers />,
        pages: [
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
            {
                title: 'Timeline',
                url: '/timeline',
                component: <Timeline />,
            },
            {
                title: 'Alarms',
                url: '/alarms',
                component: <Alarms />,
            },
        ],
    },
   
];
