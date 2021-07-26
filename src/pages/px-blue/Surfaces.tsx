import React from 'react';
import {
    ComponentExample,
    DropdownToolbarExample,
    ExampleCardList,
    PXBAppBarExample,
    ScoreCardExample,
    SpacerExample,
} from '../../components';

export const PXBSurfaces: React.FC = () => {
    const examples: ComponentExample[] = [
        { label: 'App Bar', component: <PXBAppBarExample />, fullWidth: true },
        { label: 'Dropdown Toolbar', component: <DropdownToolbarExample />, fullWidth: true },
        { label: 'Score Card', component: <ScoreCardExample /> },
        { label: 'Spacer', component: <SpacerExample /> },
    ];

    return <ExampleCardList examples={examples} />;
};
