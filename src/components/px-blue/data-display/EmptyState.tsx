import React from 'react';
import { useTheme, Theme, Typography, Button } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Add, Devices, LocationOff, NotListedLocation } from '@material-ui/icons';
import { EmptyState } from '@pxblue/react-components';
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
            <div className={classes.container}>
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
            </div>
        </>
    );
};
