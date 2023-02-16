import React from 'react';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const BackdropExample: React.FC = () => {
    const [open, setOpen] = React.useState(false);

    const handleClose = (): void => {
        setOpen(false);
    };

    const handleToggle = (): void => {
        setOpen(!open);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Button
                variant="outlined"
                color="primary"
                onClick={handleToggle}
                sx={{
                    mb: 2,
                    width: 300,
                }}
            >
                Show Backdrop
            </Button>
            {/* @TODO: FIX: Theme is not applied to backdrop */}
            {/* @TODO: FIX: Backdrop doesn't cover the drawer */}
            <Backdrop
                sx={{
                    zIndex: 1301,
                }}
                open={open}
                onClick={handleClose}
            >
                <CircularProgress color="primary" size={56} />
            </Backdrop>
        </Box>
    );
};
