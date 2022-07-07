import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const buttonPairStyles = {
    mb: 2,
    '& > *': {
        width: 168,
        '&.MuiButton-root': {
            mr: 2,
        },
    },
};

export const ContainedButtonExample: React.FC = () => (
    <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={buttonPairStyles}>
                <Button variant="contained" color="inherit">
                    Default
                </Button>
                <Button variant="contained" color="inherit" disabled>
                    Default Disabled
                </Button>
            </Box>
            <Box sx={buttonPairStyles}>
                <Button variant="contained" disableElevation>
                    Primary
                </Button>
                <Button variant="contained" disabled>
                    Primary Disabled
                </Button>
            </Box>
            <Box sx={buttonPairStyles}>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                <Button variant="contained" color="secondary" disabled>
                    Secondary Disabled
                </Button>
            </Box>
        </Box>
    </Box>
);
