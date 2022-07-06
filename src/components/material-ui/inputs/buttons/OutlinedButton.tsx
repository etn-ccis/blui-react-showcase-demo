import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const buttonPairStyles = {
    mb: 2,
    '& > *': {
        width: 168,
        mr: 2,
    },
};

export const OutlinedButtonExample: React.FC = () => (
    <Box sx={{ mb: 4 }}>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box sx={buttonPairStyles}>
                <Button variant="outlined" color="inherit">
                    Default
                </Button>
                <Button variant="outlined" color="inherit" disabled>
                    Default Disabled
                </Button>
            </Box>
            <Box sx={buttonPairStyles}>
                <Button variant="outlined" color="primary">
                    Primary
                </Button>
                <Button variant="outlined" color="primary" disabled>
                    Primary Disabled
                </Button>
            </Box>
            <Box sx={buttonPairStyles}>
                <Button variant="outlined" color="secondary">
                    Secondary
                </Button>
                <Button variant="outlined" color="secondary" disabled>
                    Secondary Disabled
                </Button>
            </Box>
        </Box>
    </Box>
);
