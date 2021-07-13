import React from 'react';
import { useTheme, Theme, IconButton, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Delete } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginBottom: theme.spacing(4),
        },
        label: {
            marginBottom: theme.spacing(1),
        },
        buttonPair: {
            display: 'flex',
            marginBottom: theme.spacing(2),
            '& > *': {
                marginRight: theme.spacing(2),
            },
        },
        buttonContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1,
        },
    })
);

export const IconButtonExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.container}>
            <div className={classes.buttonPair}>
                <div className={classes.buttonContainer}>
                    <Typography variant={'body1'} className={classes.label}>
                        Default
                    </Typography>
                    <IconButton>
                        <Delete />
                    </IconButton>
                </div>

                <div className={classes.buttonContainer}>
                    <Typography variant={'body1'} className={classes.label}>
                        Default Disabled
                    </Typography>
                    <IconButton disabled>
                        <Delete />
                    </IconButton>
                </div>
            </div>
            <div className={classes.buttonPair}>
                <div className={classes.buttonContainer}>
                    <Typography variant={'body1'} className={classes.label}>
                        Primary
                    </Typography>
                    <IconButton color="primary">
                        <Delete />
                    </IconButton>
                </div>
                <div className={classes.buttonContainer}>
                    <Typography variant={'body1'} className={classes.label}>
                        Primary Disabled
                    </Typography>
                    <IconButton color="primary" disabled>
                        <Delete />
                    </IconButton>
                </div>
            </div>
            <div className={classes.buttonPair}>
                <div className={classes.buttonContainer}>
                    <Typography variant={'body1'} className={classes.label}>
                        Secondary
                    </Typography>
                    <IconButton color="secondary">
                        <Delete />
                    </IconButton>
                </div>
                <div className={classes.buttonContainer}>
                    <Typography variant={'body1'} className={classes.label}>
                        Secondary Disabled
                    </Typography>
                    <IconButton color="secondary" disabled>
                        <Delete />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};
