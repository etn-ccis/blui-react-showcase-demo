import React from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import { Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Add from '@material-ui/icons/Add';
import Edit from '@material-ui/icons/Edit';
import Favorite from '@material-ui/icons/Favorite';
import Navigation from '@material-ui/icons/Navigation';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        exampleRow: {
            display: 'flex',
            justifyContent: 'space-evenly',
            marginBottom: theme.spacing(4),
        },
        label: {
            marginBottom: theme.spacing(1),
        },
        fabContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1,
        },
        navIcon: {
            marginRight: theme.spacing(1),
        },
    })
);

export const FloatingActionButtonExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div>
            <div className={classes.exampleRow}>
                <div className={classes.fabContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Primary
                    </Typography>
                    <Fab color="primary">
                        <Add />
                    </Fab>
                </div>
                <div className={classes.fabContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Secondary
                    </Typography>
                    <Fab color="secondary">
                        <Edit />
                    </Fab>
                </div>
            </div>
            <div className={classes.exampleRow}>
                <div className={classes.fabContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Extended
                    </Typography>
                    <Fab variant="extended">
                        <Navigation className={classes.navIcon} />
                        Navigate
                    </Fab>
                </div>
                <div className={classes.fabContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Disabled
                    </Typography>
                    <Fab disabled>
                        <Favorite />
                    </Fab>
                </div>
            </div>
        </div>
    );
};
