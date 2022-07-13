import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Typography from '@mui/material/Typography';
import Favorite from '@mui/icons-material/Favorite';
import LocationOn from '@mui/icons-material/LocationOn';
import Restore from '@mui/icons-material/Restore';
import React from 'react';
import Box from '@mui/material/Box';

const containerStyles = {
    mb: 4,
};

const sectionTitleStyles = {
    mb: 2,
};

export const BottomNavigationExample: React.FC = () => {
    const [value, setValue] = React.useState(0);
    const [valueSansLabel, setValueSansLabel] = React.useState(0);

    return (
        <>
            <Box sx={containerStyles}>
                <Typography variant={'body1'} sx={sectionTitleStyles}>
                    w/ Labels
                </Typography>
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue): void => {
                        setValue(newValue);
                    }}
                    showLabels
                >
                    <BottomNavigationAction label="Recents" icon={<Restore />} />
                    <BottomNavigationAction label="Favorites" icon={<Favorite />} />
                    <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
                </BottomNavigation>
            </Box>
            <Box sx={containerStyles}>
                <Typography variant={'body1'} sx={sectionTitleStyles}>
                    without Labels
                </Typography>
                <BottomNavigation
                    value={valueSansLabel}
                    onChange={(event, newValue): void => {
                        setValueSansLabel(newValue);
                    }}
                >
                    <BottomNavigationAction label="Recents" icon={<Restore />} />
                    <BottomNavigationAction label="Favorites" icon={<Favorite />} />
                    <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
                </BottomNavigation>
            </Box>
        </>
    );
};
