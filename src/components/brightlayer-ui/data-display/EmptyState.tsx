import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Add from '@mui/icons-material/Add';
import Devices from '@mui/icons-material/Devices';
import LocationOff from '@mui/icons-material/LocationOff';
import NotListedLocation from '@mui/icons-material/NotListedLocation';
import { styled } from '@mui/material/styles';

import { EmptyState } from '@brightlayer-ui/react-components';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../__types__';
import Box from '@mui/material/Box';

const Container = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(4),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
}));

export const EmptyStateExample: React.FC = () => {
    const direction = useSelector((store: AppStore) => store.app.direction);
    const rtl = direction === 'rtl';

    return (
        <>
            <Container>
                <SectionTitle variant={'body1'}>Basic Usage</SectionTitle>
                <EmptyState
                    icon={<NotListedLocation fontSize={'inherit'} sx={rtl ? { transform: 'scaleX(-1)' } : {}} />}
                    title={'Location Unknown'}
                />
            </Container>
            <Container>
                <SectionTitle variant={'body1'}>w/ Description</SectionTitle>
                <EmptyState
                    icon={<LocationOff fontSize={'inherit'} sx={rtl ? { transform: 'scaleX(-1)' } : {}} />}
                    title={'Location Services Disabled'}
                    description={'Enable Location Services via Settings to receive GPS information'}
                />
            </Container>
            <SectionTitle variant={'body1'}>w/ Actions</SectionTitle>
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
