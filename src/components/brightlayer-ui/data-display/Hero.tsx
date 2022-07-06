import React from 'react';
import Typography from '@mui/material/Typography';
import { ChannelValue, Hero, HeroBanner } from '@brightlayer-ui/react-components';
import GradeA from '@brightlayer-ui/icons-mui/GradeA';
import GradeB from '@brightlayer-ui/icons-mui/GradeB';
import Temp from '@brightlayer-ui/icons-mui/Temp';
import Schedule from '@mui/icons-material/Schedule';
import * as colors from '@brightlayer-ui/colors';
import Box from '@mui/material/Box';

const exampleRowStyles = {
    display: 'flex',
    justifyContent: 'space-evenly',
    mb: 2,
};

const componentContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
};

const labelStyles = {
    mb: 1,
};

export const HeroExample: React.FC = () => (
    <>
        <Box sx={exampleRowStyles}>
            <Box sx={componentContainerStyles}>
                <Typography sx={labelStyles} variant={'body2'}>
                    Basic Usage
                </Typography>
                <Hero icon={<GradeA fontSize={'inherit'} />} label={'Efficiency'} style={{ flex: 1 }} />
            </Box>
            <Box sx={componentContainerStyles}>
                <Typography sx={labelStyles} variant={'body2'}>
                    w/ Value and Units
                </Typography>
                <Hero
                    icon={<GradeB fontSize={'inherit'} />}
                    label={'Efficiency'}
                    ChannelValueProps={{ value: 88, units: '%' }}
                    style={{ flex: 1 }}
                />
            </Box>
        </Box>
        <Box sx={exampleRowStyles}>
            <Box sx={componentContainerStyles}>
                <Typography sx={labelStyles} variant={'body2'}>
                    w/ Channel Value Children
                </Typography>
                <Hero icon={<Schedule fontSize={'inherit'} />} label={'Efficiency'} style={{ flex: 1 }}>
                    <ChannelValue fontSize={'large'} value={1} units={'h'} />
                    <ChannelValue fontSize={'large'} value={27} units={'m'} />
                </Hero>
            </Box>
            <Box sx={componentContainerStyles}>
                <Typography sx={labelStyles} variant={'body2'}>
                    w/ Icon Colors
                </Typography>
                <Hero
                    iconBackgroundColor={colors.red[500]}
                    icon={<Temp fontSize={'inherit'} htmlColor={colors.white[50]} />}
                    label={'Temperature'}
                    ChannelValueProps={{ value: 38, units: '°C' }}
                    style={{ flex: 1 }}
                />
            </Box>
        </Box>
        <Box sx={componentContainerStyles}>
            <Typography sx={labelStyles} variant={'body2'}>
                Within a HeroBanner
            </Typography>
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
        </Box>
    </>
);
