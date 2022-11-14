import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { getBodyFiller } from '../../../utils/utils';
import { AppBar, ThreeLiner } from '@brightlayer-ui/react-components';
import Box from '@mui/material/Box';

const containerStyles = {
    mb: 2,
    overflow: 'hidden',
    height: 400,
    '& .title': {},
    '& .subtitle': {},
    '& .info': {},

    '& .expanded': {
        '& .liner': {
            top: 64,
        },
    },

    '& .collapsed': {
        '& .title': {
            fontSize: '1.25rem',
            fontWeight: 600,
        },
        '& .subtitle': {
            fontSize: 0,
        },
        '& .info': {
            fontSize: '1rem',
            fontWeight: 400,
            mt: '-0.25rem',
        },
    },
};

const linerStyles = {
    top: 0,
    position: 'relative',
};

export const BLUIAppBarExample: React.FC = () => (
    <>
        <Box sx={containerStyles}>
            <AppBar
                classes={{ collapsed: 'collapsed', expanded: 'expanded' }}
                scrollContainerId={'appbarBodyFiller1'}
                position={'sticky'}
            >
                <Toolbar>
                    <ThreeLiner
                        sx={linerStyles}
                        className={'liner'}
                        classes={{ title: 'title' }}
                        title={'Title'}
                        animationDuration={300}
                    />
                </Toolbar>
            </AppBar>
            <Box id="appbarBodyFiller1" sx={{ height: 400, overflow: 'scroll' }}>
                {getBodyFiller()}
            </Box>
        </Box>

        <Box sx={containerStyles}>
            <AppBar
                classes={{ collapsed: 'collapsed', expanded: 'expanded' }}
                scrollContainerId={'appbarBodyFiller2'}
                position={'sticky'}
            >
                <Toolbar>
                    <ThreeLiner
                        sx={linerStyles}
                        className={'liner'}
                        classes={{ title: 'title', subtitle: 'subtitle', info: 'info' }}
                        title={'W/ Dynamic Content'}
                        subtitle={'Subtitle'}
                        info={'Info'}
                        animationDuration={300}
                    />
                </Toolbar>
            </AppBar>
            <Box id="appbarBodyFiller2" sx={{ height: 400, overflow: 'scroll' }}>
                {getBodyFiller()}
            </Box>
        </Box>
    </>
);
