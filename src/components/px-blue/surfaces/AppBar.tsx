import React from 'react';
import { useTheme, Theme, Toolbar } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { getBodyFiller } from '../../../utils/utils';
import { AppBar, ThreeLiner } from '@pxblue/react-components';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginBottom: theme.spacing(2),
            overflow: 'hidden',
            height: 400,
        },
        title: {},
        subtitle: {},
        info: {},
        liner: {
            top: 0,
            position: 'relative',
        },
        expanded: {
            '& $liner': {
                top: 64,
            },
        },
        collapsed: {
            '& $title': {
                fontSize: '1.25rem',
                fontWeight: 600,
            },
            '& $subtitle': {
                fontSize: 0,
            },
            '& $info': {
                fontSize: '1rem',
                fontWeight: 400,
                marginTop: '-0.25rem',
            },
        },
    })
);

export const PXBAppBarExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <>
            <div className={classes.container}>
                <AppBar
                    classes={{ collapsed: classes.collapsed, expanded: classes.expanded }}
                    scrollContainerId={'appbarBodyFiller1'}
                    position={'sticky'}
                >
                    <Toolbar>
                        <ThreeLiner
                            title={'Title'}
                            animationDuration={300}
                            classes={{ title: classes.title }}
                            className={classes.liner}
                        ></ThreeLiner>
                    </Toolbar>
                </AppBar>
                <div id="appbarBodyFiller1" style={{ height: 400, overflow: 'scroll' }}>
                    {getBodyFiller()}
                </div>
            </div>

            <div className={classes.container}>
                <AppBar
                    classes={{ collapsed: classes.collapsed, expanded: classes.expanded }}
                    scrollContainerId={'appbarBodyFiller2'}
                    position={'sticky'}
                >
                    <Toolbar>
                        <ThreeLiner
                            title={'W/ Dynamic Content'}
                            subtitle={'Subtitle'}
                            info={'Info'}
                            animationDuration={300}
                            classes={{ title: classes.title, subtitle: classes.subtitle, info: classes.info }}
                            className={classes.liner}
                        ></ThreeLiner>
                    </Toolbar>
                </AppBar>
                <div id="appbarBodyFiller2" style={{ height: 400, overflow: 'scroll' }}>
                    {getBodyFiller()}
                </div>
            </div>
        </>
    );
};
