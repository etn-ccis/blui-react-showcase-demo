import React from 'react';
import {
    ComponentExample,
    DropdownToolbarExample,
    ExampleCardList,
    PXBAppBarExample,
    ScoreCardExample,
    SpacerExample,
} from '../../components';
import { usePageTitle } from '../../hooks/usePageTitle';

export const PXBSurfaces: React.FC = () => {
    const examples: ComponentExample[] = [
        { label: 'App Bar', component: <PXBAppBarExample /> },
        { label: 'Dropdown Toolbar', component: <DropdownToolbarExample /> },
        { label: 'Score Card', component: <ScoreCardExample /> },
        { label: 'Spacer', component: <SpacerExample /> },
    ];
    usePageTitle('PX Blue Surfaces');

    return <ExampleCardList examples={examples} />;
};
