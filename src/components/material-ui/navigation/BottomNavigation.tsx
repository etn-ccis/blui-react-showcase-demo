import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Typography from '@mui/material/Typography';
import { useTheme, Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Favorite from '@mui/icons-material/Favorite';
import LocationOn from '@mui/icons-material/LocationOn';
import Restore from '@mui/icons-material/Restore';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginBottom: theme.spacing(4),
        },
        sectionTitle: {
            marginBottom: theme.spacing(2),
        },
    })
);

export const BottomNavigationExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [value, setValue] = React.useState(0);
    const [valueSansLabel, setValueSansLabel] = React.useState(0);

    return (
        <>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
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
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
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
            </div>
        </>
    );
};
