import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { getBodyFiller } from '../../../utils/utils';
import { AppBar, ThreeLiner } from '@brightlayer-ui/react-components';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const Container = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(2),
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
            marginTop: '-0.25rem',
        },
    },
}));

const Liner = styled(ThreeLiner)(() => ({
    top: 0,
    position: 'relative',
}));

export const BLUIAppBarExample: React.FC = () => (
    <>
        <Container>
            <AppBar
                classes={{ collapsed: 'collapsed', expanded: 'expanded' }}
                scrollContainerId={'appbarBodyFiller1'}
                position={'sticky'}
            >
                <Toolbar>
                    <Liner
                        className={'liner'}
                        classes={{ title: 'title' }}
                        title={'Title'}
                        animationDuration={300}
                    ></Liner>
                </Toolbar>
            </AppBar>
            <div id="appbarBodyFiller1" style={{ height: 400, overflow: 'scroll' }}>
                {getBodyFiller()}
            </div>
        </Container>

        <Container>
            <AppBar
                classes={{ collapsed: 'collapsed', expanded: 'expanded' }}
                scrollContainerId={'appbarBodyFiller2'}
                position={'sticky'}
            >
                <Toolbar>
                    <Liner
                        className={'liner'}
                        classes={{ title: 'title', subtitle: 'subtitle', info: 'info' }}
                        title={'W/ Dynamic Content'}
                        subtitle={'Subtitle'}
                        info={'Info'}
                        animationDuration={300}
                    ></Liner>
                </Toolbar>
            </AppBar>
            <div id="appbarBodyFiller2" style={{ height: 400, overflow: 'scroll' }}>
                {getBodyFiller()}
            </div>
        </Container>
    </>
);
