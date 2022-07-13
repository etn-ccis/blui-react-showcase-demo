import React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

const topMarginStyles = {
    mt: 2,
};

const titleStyles = {
    ml: 2.5,
};

export const AppBarExample: React.FC = () => (
    <Box>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" size="large">
                    <Menu />
                </IconButton>
                <Typography variant="h6" sx={titleStyles}>
                    Default
                </Typography>
            </Toolbar>
        </AppBar>

        <AppBar position="static" color="primary" sx={topMarginStyles}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" size="large">
                    <Menu />
                </IconButton>
                <Typography variant="h6" sx={titleStyles}>
                    Primary
                </Typography>
            </Toolbar>
        </AppBar>

        <AppBar position="static" color="secondary" sx={topMarginStyles}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" size="large">
                    <Menu />
                </IconButton>
                <Typography variant="h6" sx={titleStyles}>
                    Secondary
                </Typography>
            </Toolbar>
        </AppBar>

        <AppBar position="static" color="transparent" sx={topMarginStyles}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" size="large">
                    <Menu />
                </IconButton>
                <Typography variant="h6" sx={titleStyles}>
                    Transparent
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>
);
