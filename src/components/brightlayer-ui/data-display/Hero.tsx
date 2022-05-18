import React from 'react';
import Typography from '@mui/material/Typography';
import { ChannelValue, Hero, HeroBanner } from '@brightlayer-ui/react-components';
import GradeA from '@brightlayer-ui/icons-mui/GradeA';
import GradeB from '@brightlayer-ui/icons-mui/GradeB';
import Temp from '@brightlayer-ui/icons-mui/Temp';
import Schedule from '@mui/icons-material/Schedule';
import * as colors from '@brightlayer-ui/colors';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const ExampleRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-evenly',
    marginBottom: theme.spacing(2),
}));

const ComponentContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
}));

const Label = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(1),
}));

export const HeroExample: React.FC = () => (
    <>
        <ExampleRow>
            <ComponentContainer>
                <Label variant={'body2'}>Basic Usage</Label>
                <Hero
                    icon={<GradeA fontSize={'inherit'} />}
                    label={'Efficiency'}
                    sx={{ flex: 1 }}
                    style={{ flex: 1 }}
                />
            </ComponentContainer>
            <ComponentContainer>
                <Label variant={'body2'}>w/ Value and Units</Label>
                <Hero
                    icon={<GradeB fontSize={'inherit'} />}
                    label={'Efficiency'}
                    ChannelValueProps={{ value: 88, units: '%' }}
                    style={{ flex: 1 }}
                />
            </ComponentContainer>
        </ExampleRow>
        <ExampleRow>
            <ComponentContainer>
                <Label variant={'body2'}>w/ Channel Value Children</Label>
                <Hero icon={<Schedule fontSize={'inherit'} />} label={'Efficiency'} style={{ flex: 1 }}>
                    <ChannelValue fontSize={'large'} value={1} units={'h'} />
                    <ChannelValue fontSize={'large'} value={27} units={'m'} />
                </Hero>
            </ComponentContainer>
            <ComponentContainer>
                <Label variant={'body2'}>w/ Icon Colors</Label>
                <Hero
                    iconBackgroundColor={colors.red[500]}
                    icon={<Temp fontSize={'inherit'} htmlColor={colors.white[50]} />}
                    label={'Temperature'}
                    ChannelValueProps={{ value: 38, units: '°C' }}
                    style={{ flex: 1 }}
                />
            </ComponentContainer>
        </ExampleRow>
        <ComponentContainer>
            <Label variant={'body2'}>Within a HeroBanner</Label>
            <HeroBanner style={{ width: 376, border: `solid 1px ${colors.gray[50]}`, borderRadius: 4 }}>
                <Hero
                    icon={<GradeA fontSize={'inherit'} />}
                    label={'Efficiency'}
                    ChannelValueProps={{ value: '95', units: '%' }}
                />
                <Hero
                    icon={<GradeB fontSize={'inherit'} />}
                    label={'Efficiency'}
                    ChannelValueProps={{ value: '88', units: '%' }}
                />
                <Hero icon={<Schedule fontSize={'inherit'} />} label={'Efficiency'}>
                    <ChannelValue fontSize={'large'} value={1} units={'h'} />
                    <ChannelValue fontSize={'large'} value={27} units={'m'} />
                </Hero>
                <Hero
                    iconBackgroundColor={colors.red[500]}
                    icon={<Temp fontSize={'inherit'} htmlColor={colors.white[50]} />}
                    label={'Temperature'}
                    ChannelValueProps={{ value: 38, units: '°C' }}
                />
            </HeroBanner>
        </ComponentContainer>
    </>
);
