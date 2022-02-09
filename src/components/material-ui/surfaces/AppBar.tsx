import React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { useTheme, Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Menu from '@mui/icons-material/Menu';

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
                    <IconButton edge="start" color="inherit" aria-label="menu" size="large">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Default
                    </Typography>
                </Toolbar>
            </AppBar>

            <AppBar position="static" color="primary" className={classes.topMargin}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" size="large">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Primary
                    </Typography>
                </Toolbar>
            </AppBar>

            <AppBar position="static" color="secondary" className={classes.topMargin}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" size="large">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Secondary
                    </Typography>
                </Toolbar>
            </AppBar>

            <AppBar position="static" color="transparent" className={classes.topMargin}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" size="large">
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
