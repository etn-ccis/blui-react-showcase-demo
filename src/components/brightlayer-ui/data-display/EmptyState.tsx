import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme, Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Add from '@mui/icons-material/Add';
import Devices from '@mui/icons-material/Devices';
import LocationOff from '@mui/icons-material/LocationOff';
import NotListedLocation from '@mui/icons-material/NotListedLocation';

import { EmptyState } from '@brightlayer-ui/react-components';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../__types__';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginBottom: theme.spacing(4),
        },
        sectionTitle: {
            marginBottom: theme.spacing(2),
        },
        iconFlip: {
            transform: 'scaleX(-1)',
        },
    })
);

export const EmptyStateExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const direction = useSelector((store: AppStore) => store.app.direction);
    const rtl = direction === 'rtl';

    return (
        <>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Basic Usage
                </Typography>
                <EmptyState
                    icon={<NotListedLocation fontSize={'inherit'} className={clsx({ [classes.iconFlip]: rtl })} />}
                    title={'Location Unknown'}
                />
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    w/ Description
                </Typography>
                <EmptyState
                    icon={<LocationOff fontSize={'inherit'} className={clsx({ [classes.iconFlip]: rtl })} />}
                    title={'Location Services Disabled'}
                    description={'Enable Location Services via Settings to receive GPS information'}
                />
            </div>
            <Typography variant={'body1'} className={classes.sectionTitle}>
                w/ Actions
            </Typography>
            <EmptyState
                icon={<Devices fontSize={'inherit'} className={clsx({ [classes.iconFlip]: rtl })} />}
                title={'No Devices'}
                description={'Check your network connection or add a new device'}
                actions={
                    <Button variant={'outlined'} color={'primary'} startIcon={<Add />}>
                        Add Device
                    </Button>
                }
            />
        </>
    );
};
