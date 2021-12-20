import React from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import { Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        button: {
            marginBottom: theme.spacing(2),
            width: 300,
        },
        backdrop: {
            zIndex: 1201,
        },
    })
);

export const BackdropExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [open, setOpen] = React.useState(false);

    const handleClose = (): void => {
        setOpen(false);
    };

    const handleToggle = (): void => {
        setOpen(!open);
    };

    return (
        <div className={classes.container}>
            <Button variant="outlined" color="primary" onClick={handleToggle} className={classes.button}>
                Show Backdrop
            </Button>
            {/* @TODO: FIX: Theme is not applied to backdrop */}
            {/* @TODO: FIX: Backdrop doesn't cover the drawer */}
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <CircularProgress color="primary" size={56} />
            </Backdrop>
        </div>
    );
};
