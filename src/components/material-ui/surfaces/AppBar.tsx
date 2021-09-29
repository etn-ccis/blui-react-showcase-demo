import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import useTheme from '@material-ui/core/styles/useTheme';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Menu from '@material-ui/icons/Menu';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        topMargin: {
            marginTop: theme.spacing(2),
        },
        title: {
            marginLeft: theme.spacing(2.5),
        },
    })
);

export const AppBarExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Default
                    </Typography>
                </Toolbar>
            </AppBar>

            <AppBar position="static" color="primary" className={classes.topMargin}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Primary
                    </Typography>
                </Toolbar>
            </AppBar>

            <AppBar position="static" color="secondary" className={classes.topMargin}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Secondary
                    </Typography>
                </Toolbar>
            </AppBar>

            <AppBar position="static" color="transparent" className={classes.topMargin}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Transparent
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};
