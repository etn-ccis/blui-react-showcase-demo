import React from 'react';
import Typography from '@mui/material/Typography';
import * as colors from '@brightlayer-ui/colors';
import { Spacer } from '@brightlayer-ui/react-components';
import Box from '@mui/material/Box';

const sectionTitleStyles = {
    mb: 2,
};

const labelStyles = {
    mb: 1,
};

const componentContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
};

export const SpacerExample: React.FC = () => (
    <>
        <Typography variant={'body1'} sx={sectionTitleStyles}>
            w/ Flex Layout
        </Typography>
        <Box sx={componentContainerStyles}>
            <Typography variant={'body2'} sx={labelStyles}>
                Horizontal
            </Typography>
            <Box
                sx={{
                    width: '100%',
                    height: 50,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    color: colors.black[900],
                    mb: 1,
                }}
            >
                <Spacer flex={1} sx={{ background: colors.blue[300] }}>
                    1
                </Spacer>
                <Spacer flex={2} sx={{ background: colors.yellow[300] }}>
                    2
                </Spacer>
                <Spacer flex={3} sx={{ background: colors.red[300] }}>
                    3
                </Spacer>
            </Box>
        </Box>
        <Box sx={componentContainerStyles}>
            <Typography variant={'body2'} sx={labelStyles}>
                Vertical
            </Typography>
            <Box
                sx={{
                    width: '100%',
                    height: 150,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    color: colors.black[900],
                }}
            >
                <Spacer flex={1} sx={{ background: colors.blue[300] }}>
                    1
                </Spacer>
                <Spacer flex={2} sx={{ background: colors.yellow[300] }}>
                    2
                </Spacer>
                <Spacer flex={3} sx={{ background: colors.red[300] }}>
                    3
                </Spacer>
            </Box>
        </Box>
        <Typography variant={'body1'} sx={{ ...sectionTitleStyles, mt: 4 }}>
            w/ Static Layout
        </Typography>
        <Box sx={componentContainerStyles}>
            <Typography variant={'body2'} sx={labelStyles}>
                Horizontal
            </Typography>
            <Box sx={{ width: '100%', height: 50, display: 'inline', color: colors.black[900], mb: 1 }}>
                <Spacer width={60} height={50} sx={{ background: colors.blue[300], display: 'inline-block' }}>
                    1
                </Spacer>
                <Spacer width={60} height={50} sx={{ background: colors.yellow[300], display: 'inline-block' }}>
                    2
                </Spacer>
                <Spacer width={60} height={50} sx={{ background: colors.red[300], display: 'inline-block' }}>
                    3
                </Spacer>
            </Box>
        </Box>
        <Box sx={componentContainerStyles}>
            <Typography variant={'body2'} sx={labelStyles}>
                Vertical
            </Typography>
            <Box
                sx={{
                    width: '100%',
                    color: colors.black[900],
                }}
            >
                <Spacer height={50} sx={{ background: colors.blue[300] }}>
                    1
                </Spacer>
                <Spacer height={50} sx={{ background: colors.yellow[300] }}>
                    2
                </Spacer>
                <Spacer height={50} sx={{ background: colors.red[300] }}>
                    3
                </Spacer>
            </Box>
        </Box>
    </>
);
