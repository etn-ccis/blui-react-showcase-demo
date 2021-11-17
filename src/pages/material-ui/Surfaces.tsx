import React from 'react';
import {
    AccordionExample,
    AppBarExample,
    CardExample,
    ComponentExample,
    ExampleCardList,
    PaperExample,
} from '../../components';
import { usePageTitle } from '../../hooks/usePageTitle';

export const Surfaces: React.FC = () => {
    const examples: ComponentExample[] = [
        { label: 'AppBar', component: <AppBarExample /> },
        { label: 'Paper', component: <PaperExample /> },
        { label: 'Card', component: <CardExample /> },
        { label: 'Accordion', component: <AccordionExample /> },
    ];
    usePageTitle('Material UI Surfaces');

    return <ExampleCardList examples={examples} />;
};
