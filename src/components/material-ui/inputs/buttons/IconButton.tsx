import React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useTheme, Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Delete from '@mui/icons-material/Delete';

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
                    <IconButton color="inherit" size="large">
                        <Delete />
                    </IconButton>
                </div>

                <div className={classes.buttonContainer}>
                    <Typography variant={'body1'} className={classes.label}>
                        Default Disabled
                    </Typography>
                    <IconButton color="inherit" disabled size="large">
                        <Delete />
                    </IconButton>
                </div>
            </div>
            <div className={classes.buttonPair}>
                <div className={classes.buttonContainer}>
                    <Typography variant={'body1'} className={classes.label}>
                        Primary
                    </Typography>
                    <IconButton color="primary" size="large">
                        <Delete />
                    </IconButton>
                </div>
                <div className={classes.buttonContainer}>
                    <Typography variant={'body1'} className={classes.label}>
                        Primary Disabled
                    </Typography>
                    <IconButton color="primary" disabled size="large">
                        <Delete />
                    </IconButton>
                </div>
            </div>
            <div className={classes.buttonPair}>
                <div className={classes.buttonContainer}>
                    <Typography variant={'body1'} className={classes.label}>
                        Secondary
                    </Typography>
                    <IconButton color="secondary" size="large">
                        <Delete />
                    </IconButton>
                </div>
                <div className={classes.buttonContainer}>
                    <Typography variant={'body1'} className={classes.label}>
                        Secondary Disabled
                    </Typography>
                    <IconButton color="secondary" disabled size="large">
                        <Delete />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};
