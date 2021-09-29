import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import useTheme from '@material-ui/core/styles/useTheme';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Delete from '@material-ui/icons/Delete';

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
