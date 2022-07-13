import React, { forwardRef } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import Close from '@mui/icons-material/Close';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Box from '@mui/material/Box';

const buttonStyles = {
    mb: 2,
    width: 300,
};

const Alert: React.FC<AlertProps> = forwardRef((props, ref) => (
    <MuiAlert elevation={6} variant="filled" {...props} ref={ref} />
));

export const SnackbarExample: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const [openError, setOpenError] = React.useState(false);
    const [openWarning, setOpenWarning] = React.useState(false);
    const [openInformation, setOpenInformation] = React.useState(false);
    const [openSuccess, setOpenSuccess] = React.useState(false);

    const handleClick = (): void => {
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string): void => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleErrorClick = (): void => {
        setOpenError(true);
    };

    const handleErrorClose = (event: React.SyntheticEvent | Event, reason?: string): void => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenError(false);
    };
    const handleWarningClick = (): void => {
        setOpenWarning(true);
    };

    const handleWarningClose = (event: React.SyntheticEvent | Event, reason?: string): void => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenWarning(false);
    };
    const handleInformationClick = (): void => {
        setOpenInformation(true);
    };

    const handleInformationClose = (event: React.SyntheticEvent | Event, reason?: string): void => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenInformation(false);
    };
    const handleSuccessClick = (): void => {
        setOpenSuccess(true);
    };

    const handleSuccessClose = (event: React.SyntheticEvent | Event, reason?: string): void => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSuccess(false);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button variant="outlined" color="primary" onClick={handleClick} sx={buttonStyles}>
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

            <Button variant="outlined" color="primary" onClick={handleErrorClick} sx={buttonStyles}>
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

            <Button variant="outlined" color="primary" onClick={handleWarningClick} sx={buttonStyles}>
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

            <Button variant="outlined" color="primary" onClick={handleInformationClick} sx={buttonStyles}>
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

            <Button variant="outlined" color="primary" onClick={handleSuccessClick} sx={buttonStyles}>
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
        </Box>
    );
};
