import React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { ChannelValue } from '@brightlayer-ui/react-components';
import TrendingUp from '@mui/icons-material/TrendingUp';
import * as colors from '@brightlayer-ui/colors';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../__types__';
import Box from '@mui/material/Box';

const ComponentContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginBottom: theme.spacing(4),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
}));

export const ChannelValueExample: React.FC = () => {
    const direction = useSelector((store: AppStore) => store.app.direction);
    const rtl = direction === 'rtl';

    return (
        <>
            <ComponentContainer>
                <SectionTitle variant={'body1'}>Basic Usage</SectionTitle>
                <ChannelValue value={'123'} />
            </ComponentContainer>
            <ComponentContainer>
                <SectionTitle variant={'body1'}>w/ Units</SectionTitle>
                <ChannelValue value={'123'} units={'hz'} />
            </ComponentContainer>
            <ComponentContainer>
                <SectionTitle variant={'body1'}>w/ Icon</SectionTitle>
                <ChannelValue
                    value={'123'}
                    units={'hz'}
                    icon={<TrendingUp htmlColor={colors.red[500]} sx={rtl ? { transform: 'scaleX(-1)' } : {}} />}
                />
            </ComponentContainer>
            <ComponentContainer>
                <SectionTitle variant={'body1'}>w/ Custom Font Size</SectionTitle>
                <ChannelValue
                    value={'123'}
                    units={'hz'}
                    fontSize={24}
                    icon={<TrendingUp htmlColor={colors.red[500]} sx={rtl ? { transform: 'scaleX(-1)' } : {}} />}
                />
            </ComponentContainer>
        </>
    );
};
