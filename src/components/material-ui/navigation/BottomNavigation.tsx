import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';
import { Theme } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Favorite from '@material-ui/icons/Favorite';
import LocationOn from '@material-ui/icons/LocationOn';
import Restore from '@material-ui/icons/Restore';
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
