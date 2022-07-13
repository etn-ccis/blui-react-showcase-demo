import React from 'react';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import Add from '@mui/icons-material/Add';
import Edit from '@mui/icons-material/Edit';
import Favorite from '@mui/icons-material/Favorite';
import Navigation from '@mui/icons-material/Navigation';
import Box from '@mui/material/Box';

const exampleRowStyles = {
    display: 'flex',
    justifyContent: 'space-evenly',
    mb: 4,
};

const labelStyles = {
    mb: 1,
};

const ƒabContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
};

export const FloatingActionButtonExample: React.FC = () => (
    <Box>
        <Box sx={exampleRowStyles}>
            <Box sx={ƒabContainerStyles}>
                <Typography variant={'body2'} sx={labelStyles}>
                    Primary
                </Typography>
                <Fab color="primary">
                    <Add />
                </Fab>
            </Box>
            <Box sx={ƒabContainerStyles}>
                <Typography variant={'body2'} sx={labelStyles}>
                    Secondary
                </Typography>
                <Fab color="secondary">
                    <Edit />
                </Fab>
            </Box>
        </Box>
        <Box sx={exampleRowStyles}>
            <Box sx={ƒabContainerStyles}>
                <Typography variant={'body2'} sx={labelStyles}>
                    Extended
                </Typography>
                <Fab variant="extended">
                    <Navigation sx={{ mr: 1 }} />
                    Navigate
                </Fab>
            </Box>
            <Box sx={ƒabContainerStyles}>
                <Typography variant={'body2'} sx={labelStyles}>
                    Disabled
                </Typography>
                <Fab disabled>
                    <Favorite />
                </Fab>
            </Box>
        </Box>
    </Box>
);
