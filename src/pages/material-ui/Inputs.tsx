import React from 'react';
import { useTheme, makeStyles, createStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import {
    CheckboxExample,
    ContainedButtonExample,
    ContainedButtonGroupExample,
    DateTimeExample,
    FilledSelectExample,
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

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            margin: theme.spacing(1),
        },
        exampleCard: {
            margin: theme.spacing(1),
            width: '100%',
            maxWidth: '400px',
            minWidth: '350px',
        },
    })
);

export type ComponentExample = {
    label: string;
    component: JSX.Element;
};

export const Inputs: React.FC = () => {
    const theme = useTheme();
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
        { label: 'Filled Text Field', component: <StandardTextFieldExample /> },
        { label: 'Outlined Text Field', component: <OutlinedTextFieldExample /> },
    ];
    const classes = useStyles(theme);

    return (
        <div className={classes.container}>
            {examples.map((example) => (
                <Card key={example.label} className={classes.exampleCard}>
                    <CardHeader title={example.label} />
                    <CardContent>{example.component}</CardContent>
                </Card>
            ))}
        </div>
    );
};
