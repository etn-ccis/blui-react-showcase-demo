import React from 'react';
import {
    ChannelValueExample,
    ComponentExample,
    EmptyStateExample,
    ExampleCardList,
    HeroExample,
    InfoListItemExample,
    ListItemTagExample,
    ThreeLinerExample,
    UserMenuExample,
} from '../../components';
import { usePageTitle } from '../../hooks/usePageTitle';

export const BLUIDataDisplay: React.FC = () => {
    const examples: ComponentExample[] = [
        { label: 'Channel Value', component: <ChannelValueExample /> },
        { label: 'Empty State', component: <EmptyStateExample /> },
        { label: 'Hero', component: <HeroExample /> },
        { label: 'Info List Item', component: <InfoListItemExample /> },
        { label: 'List Item Tag', component: <ListItemTagExample /> },
        { label: 'Three Liner', component: <ThreeLinerExample /> },
        { label: 'UserMenu', component: <UserMenuExample /> },
    ];
    usePageTitle('Brightlayer UI Data Display');

    return <ExampleCardList examples={examples} />;
};
