import React from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import { Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Close from '@material-ui/icons/Close';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

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
    })
);

const Alert = (props: AlertProps): JSX.Element => <MuiAlert elevation={6} variant="filled" {...props} />;

export const SnackbarExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [open, setOpen] = React.useState(false);
    const [openError, setOpenError] = React.useState(false);
    const [openWarning, setOpenWarning] = React.useState(false);
    const [openInformation, setOpenInformation] = React.useState(false);
    const [openSuccess, setOpenSuccess] = React.useState(false);

    const handleClick = (): void => {
        setOpen(true);
    };

    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string): void => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const handleErrorClick = (): void => {
        setOpenError(true);
    };

    const handleErrorClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string): void => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenError(false);
    };
    const handleWarningClick = (): void => {
        setOpenWarning(true);
    };

    const handleWarningClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string): void => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenWarning(false);
    };
    const handleInformationClick = (): void => {
        setOpenInformation(true);
    };

    const handleInformationClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string): void => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenInformation(false);
    };
    const handleSuccessClick = (): void => {
        setOpenSuccess(true);
    };

    const handleSuccessClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string): void => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSuccess(false);
    };

    return (
        <div className={classes.container}>
            <Button variant="outlined" color="primary" onClick={handleClick} className={classes.button}>
                Open Simple Snackbar
            </Button>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                message="Hey there! I'm a snackbar."
                action={
                    <React.Fragment>
                        <Button color="secondary" size="small" onClick={handleClose}>
                            UNDO
                        </Button>
                        <IconButton size="small" color="inherit" onClick={handleClose}>
                            <Close fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />

            <Button variant="outlined" color="primary" onClick={handleErrorClick} className={classes.button}>
                Open Error Snackbar
            </Button>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={openError}
                autoHideDuration={5000}
                onClose={handleErrorClose}
            >
                <Alert onClose={handleErrorClose} severity="error">
                    This is an error message!
                </Alert>
            </Snackbar>

            <Button variant="outlined" color="primary" onClick={handleWarningClick} className={classes.button}>
                Open Warning Snackbar
            </Button>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={openWarning}
                autoHideDuration={5000}
                onClose={handleWarningClose}
            >
                <Alert onClose={handleWarningClose} severity="warning">
                    This is a warning message!
                </Alert>
            </Snackbar>

            <Button variant="outlined" color="primary" onClick={handleInformationClick} className={classes.button}>
                Open Information Snackbar
            </Button>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={openInformation}
                autoHideDuration={5000}
                onClose={handleInformationClose}
            >
                <Alert onClose={handleInformationClose} severity="info">
                    This is an information message!
                </Alert>
            </Snackbar>

            <Button variant="outlined" color="primary" onClick={handleSuccessClick} className={classes.button}>
                Open Success Snackbar
            </Button>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={openSuccess}
                autoHideDuration={5000}
                onClose={handleSuccessClose}
            >
                <Alert onClose={handleSuccessClose} severity="success">
                    This is a success message!
                </Alert>
            </Snackbar>
        </div>
    );
};
