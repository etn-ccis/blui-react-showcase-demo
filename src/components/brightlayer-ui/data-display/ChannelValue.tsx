import React from 'react';
import Typography from '@mui/material/Typography';
import { ChannelValue } from '@brightlayer-ui/react-components';
import TrendingUp from '@mui/icons-material/TrendingUp';
import * as colors from '@brightlayer-ui/colors';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../__types__';
import Box from '@mui/material/Box';

const componentContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    mb: 4,
};

const sectionTitleStyles = {
    mb: 2,
};

export const ChannelValueExample: React.FC = () => {
    const direction = useSelector((store: AppStore) => store.app.direction);
    const rtl = direction === 'rtl';

    return (
        <>
            <Box sx={componentContainerStyles}>
                <Typography sx={sectionTitleStyles} variant={'body1'}>
                    Basic Usage
                </Typography>
                <ChannelValue value={'123'} />
            </Box>
            <Box sx={componentContainerStyles}>
                <Typography sx={sectionTitleStyles} variant={'body1'}>
                    w/ Units
                </Typography>
                <ChannelValue value={'123'} units={'hz'} />
            </Box>
            <Box sx={componentContainerStyles}>
                <Typography sx={sectionTitleStyles} variant={'body1'}>
                    w/ Icon
                </Typography>
                <ChannelValue
                    value={'123'}
                    units={'hz'}
                    icon={<TrendingUp htmlColor={colors.red[500]} sx={rtl ? { transform: 'scaleX(-1)' } : {}} />}
                />
            </Box>
            <Box sx={componentContainerStyles}>
                <Typography sx={sectionTitleStyles} variant={'body1'}>
                    w/ Custom Font Size
                </Typography>
                <ChannelValue
                    value={'123'}
                    units={'hz'}
                    fontSize={24}
                    icon={<TrendingUp htmlColor={colors.red[500]} sx={rtl ? { transform: 'scaleX(-1)' } : {}} />}
                />
            </Box>
        </>
    );
};
