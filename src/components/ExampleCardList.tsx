import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

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
