import React from 'react';
import { useTheme, Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
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
                maxWidth: `${416 * 2 + parseInt(theme.spacing(2))}px`,
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
