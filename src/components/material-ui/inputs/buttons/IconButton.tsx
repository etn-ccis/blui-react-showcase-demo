import React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Delete from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';

const buttonPairStyles = {
    display: 'flex',
    mb: 2,
    '& > *': {
        mr: 2,
    },
};
const buttonContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
};

export const IconButtonExample: React.FC = () => (
    <Box sx={{ mb: 4 }}>
        <Box sx={buttonPairStyles}>
            <Box sx={buttonContainerStyles}>
                <Typography variant={'body1'} sx={{ mb: 1 }}>
                    Default
                </Typography>
                <IconButton color="inherit" size="large">
                    <Delete />
                </IconButton>
            </Box>

            <Box sx={buttonContainerStyles}>
                <Typography variant={'body1'} sx={{ mb: 1 }}>
                    Default Disabled
                </Typography>
                <IconButton color="inherit" disabled size="large">
                    <Delete />
                </IconButton>
            </Box>
        </Box>
        <Box sx={buttonPairStyles}>
            <Box sx={buttonContainerStyles}>
                <Typography variant={'body1'} sx={{ mb: 1 }}>
                    Primary
                </Typography>
                <IconButton color="primary" size="large">
                    <Delete />
                </IconButton>
            </Box>
            <Box sx={buttonContainerStyles}>
                <Typography variant={'body1'} sx={{ mb: 1 }}>
                    Primary Disabled
                </Typography>
                <IconButton color="primary" disabled size="large">
                    <Delete />
                </IconButton>
            </Box>
        </Box>
        <Box sx={buttonPairStyles}>
            <Box sx={buttonContainerStyles}>
                <Typography variant={'body1'} sx={{ mb: 1 }}>
                    Secondary
                </Typography>
                <IconButton color="secondary" size="large">
                    <Delete />
                </IconButton>
            </Box>
            <Box sx={buttonContainerStyles}>
                <Typography variant={'body1'} sx={{ mb: 1 }}>
                    Secondary Disabled
                </Typography>
                <IconButton color="secondary" disabled size="large">
                    <Delete />
                </IconButton>
            </Box>
        </Box>
    </Box>
);
