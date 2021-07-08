import React from 'react';
import { useTheme, makeStyles, createStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardHeader } from '@material-ui/core';

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
            maxWidth: '416px',
            minWidth: '350px',
        },
    })
);

export type ComponentExample = {
    label: string;
    component: JSX.Element;
};

export type ExampleCardListProps = {
    examples: ComponentExample[];
};

export const ExampleCardList = (props: ExampleCardListProps): JSX.Element => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const { examples } = props;

    return (
        <div className={classes.container}>
            {examples.map((example: ComponentExample) => (
                <Card key={example.label} className={classes.exampleCard}>
                    <CardHeader title={example.label} />
                    <CardContent>{example.component}</CardContent>
                </Card>
            ))}
        </div>
    );
};
