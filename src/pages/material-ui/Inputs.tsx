import React from 'react';
import {
    CheckboxExample,
    ComponentExample,
    ContainedButtonExample,
    ContainedButtonGroupExample,
    DateTimeExample,
    ExampleCardList,
    FilledSelectExample,
    FilledTextFieldExample,
    FloatingActionButtonExample,
    IconButtonExample,
    OutlinedButtonExample,
    OutlinedButtonGroupExample,
    OutlinedSelectExample,
    OutlinedTextFieldExample,
    RadioExample,
    SliderExample,
    StandardSelectExample,
    StandardTextFieldExample,
    SwitchExample,
    TextButtonExample,
    TextButtonGroupExample,
} from '../../components';
import { usePageTitle } from '../../hooks/usePageTitle';

export const Inputs: React.FC = () => {
    const examples: ComponentExample[] = [
        { label: 'Text Button', component: <TextButtonExample /> },
        { label: 'Contained Button', component: <ContainedButtonExample /> },
        { label: 'Outlined Button', component: <OutlinedButtonExample /> },
        { label: 'Icon Button', component: <IconButtonExample /> },
        { label: 'Outlined Button Group', component: <OutlinedButtonGroupExample /> },
        { label: 'Contained Button Group', component: <ContainedButtonGroupExample /> },
        { label: 'Text Button Group', component: <TextButtonGroupExample /> },
        { label: 'Checkbox', component: <CheckboxExample /> },
        { label: 'FAB', component: <FloatingActionButtonExample /> },
        { label: 'Date / Time', component: <DateTimeExample /> },
        { label: 'Radio', component: <RadioExample /> },
        { label: 'Standard Select', component: <StandardSelectExample /> },
        { label: 'Filled Select', component: <FilledSelectExample /> },
        { label: 'Outlined Select', component: <OutlinedSelectExample /> },
        { label: 'Slider', component: <SliderExample /> },
        { label: 'Switch', component: <SwitchExample /> },
        { label: 'Standard Text Field', component: <StandardTextFieldExample /> },
        { label: 'Filled Text Field', component: <FilledTextFieldExample /> },
        { label: 'Outlined Text Field', component: <OutlinedTextFieldExample /> },
    ];
    usePageTitle('Material UI Inputs');

    return <ExampleCardList examples={examples} />;
};
