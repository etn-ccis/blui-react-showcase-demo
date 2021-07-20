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

export const PXBDataDisplay: React.FC = () => {
    const examples: ComponentExample[] = [
        { label: 'Channel Value', component: <ChannelValueExample /> },
        { label: 'Empty State', component: <EmptyStateExample /> },
        { label: 'Hero', component: <HeroExample /> },
        { label: 'Info List Item', component: <InfoListItemExample /> },
        { label: 'List Item Tag', component: <ListItemTagExample /> },
        { label: 'Three Liner', component: <ThreeLinerExample /> },
        { label: 'UserMenu', component: <UserMenuExample /> },
    ];

    return <ExampleCardList examples={examples} />;
};
