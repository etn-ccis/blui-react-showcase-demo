import React from 'react';
import { useTheme, makeStyles, createStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import clsx from 'clsx';

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
        fullWidthExampleCard: {
            [theme.breakpoints.up('md')]: {
                maxWidth: 416 * 2 + theme.spacing(2),
            },
        },
    })
);

export type ComponentExample = {
    label: string;
    component: JSX.Element;
    fullWidth?: boolean;
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
                <Card
                    key={example.label}
                    className={clsx([classes.exampleCard, example.fullWidth ? classes.fullWidthExampleCard : ''])}
                >
                    <CardHeader title={example.label} />
                    <CardContent>{example.component}</CardContent>
                </Card>
            ))}
        </div>
    );
};
