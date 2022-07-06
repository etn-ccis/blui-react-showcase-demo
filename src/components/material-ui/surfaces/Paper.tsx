import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export const PaperExample: React.FC = () => (
    <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',

            '& > *': {
                m: 1,
                width: 14,
                height: 14,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
        }}
    >
        <Paper elevation={0}>Elevation: 0</Paper>
        <Paper elevation={2}>Elevation: 2</Paper>
        <Paper elevation={4}>Elevation: 4</Paper>
        <Paper elevation={6}>Elevation: 6</Paper>
        <Paper elevation={8}>Elevation: 8</Paper>
        <Paper elevation={12}>Elevation: 12</Paper>
        <Paper elevation={18}>Elevation: 18</Paper>
        <Paper elevation={24}>Elevation: 24</Paper>
        <Paper elevation={0} variant={'outlined'}>
            Outlined
        </Paper>
    </Box>
);
