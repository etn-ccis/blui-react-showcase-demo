import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, useTheme, Theme } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { createStyles, makeStyles } from '@material-ui/styles';

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
