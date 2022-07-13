import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Add from '@mui/icons-material/Add';
import Devices from '@mui/icons-material/Devices';
import LocationOff from '@mui/icons-material/LocationOff';
import NotListedLocation from '@mui/icons-material/NotListedLocation';
import { EmptyState } from '@brightlayer-ui/react-components';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../__types__';
import Box from '@mui/material/Box';

const containerStyles = {
    mb: 4,
};

const sectionTitleStyles = {
    mb: 2,
};

export const EmptyStateExample: React.FC = () => {
    const direction = useSelector((store: AppStore) => store.app.direction);
    const rtl = direction === 'rtl';

    return (
        <>
            <Box sx={containerStyles}>
                <Typography sx={sectionTitleStyles} variant={'body1'}>
                    Basic Usage
                </Typography>
                <EmptyState
                    icon={<NotListedLocation fontSize={'inherit'} sx={rtl ? { transform: 'scaleX(-1)' } : {}} />}
                    title={'Location Unknown'}
                />
            </Box>
            <Box sx={containerStyles}>
                <Typography sx={sectionTitleStyles} variant={'body1'}>
                    w/ Description
                </Typography>
                <EmptyState
                    icon={<LocationOff fontSize={'inherit'} sx={rtl ? { transform: 'scaleX(-1)' } : {}} />}
                    title={'Location Services Disabled'}
                    description={'Enable Location Services via Settings to receive GPS information'}
                />
            </Box>
            <Typography sx={sectionTitleStyles} variant={'body1'}>
                w/ Actions
            </Typography>
            <EmptyState
                icon={<Devices fontSize={'inherit'} sx={rtl ? { transform: 'scaleX(-1)' } : {}} />}
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
