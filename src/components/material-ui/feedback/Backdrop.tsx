import React from 'react';
import { useTheme, Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

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
