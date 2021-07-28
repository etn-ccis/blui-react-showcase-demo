import React from 'react';
import {
    BottomNavigationExample,
    BreadcrumbsExample,
    ComponentExample,
    ExampleCardList,
    LinkExample,
    MenuExample,
    MobileStepperExample,
    StepperExample,
    TabsExample,
} from '../../components';
import { usePageTitle } from '../../hooks/usePageTitle';

export const Navigation: React.FC = () => {
    const examples: ComponentExample[] = [
        { label: 'Bottom Navigation', component: <BottomNavigationExample /> },
        { label: 'Breadcrumbs', component: <BreadcrumbsExample /> },
        { label: 'Link', component: <LinkExample /> },
        { label: 'Menu', component: <MenuExample /> },
        { label: 'Stepper', component: <StepperExample />, fullWidth: true },
        { label: 'Mobile Stepper', component: <MobileStepperExample /> },
        { label: 'Tabs', component: <TabsExample /> },
    ];
    usePageTitle('Material UI Navigation');

    return <ExampleCardList examples={examples} />;
};
