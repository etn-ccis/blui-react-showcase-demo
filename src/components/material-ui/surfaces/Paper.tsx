import React from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Paper from '@material-ui/core/Paper';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',

            '& > *': {
                margin: theme.spacing(1),
                width: theme.spacing(14),
                height: theme.spacing(14),
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
        },
    })
);

export const PaperExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.container}>
            <Paper elevation={0}>Elevation: 0</Paper>
            <Paper elevation={2}>Elevation: 2</Paper>
            <Paper elevation={4}>Elevation: 4</Paper>
            <Paper elevation={6}>Elevation: 6</Paper>
            <Paper elevation={8}>Elevation: 8</Paper>
            <Paper elevation={12}>Elevation: 12</Paper>
            <Paper elevation={18}>Elevation: 18</Paper>
            <Paper elevation={24}>Elevation: 24</Paper>
            <Paper elevation={0} variant={'outlined'}>
                Outlined
            </Paper>
        </div>
    );
};
