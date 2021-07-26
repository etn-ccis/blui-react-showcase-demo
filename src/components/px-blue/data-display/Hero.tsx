import React from 'react';
import { useTheme, Theme, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { ChannelValue, Hero, HeroBanner } from '@pxblue/react-components';
import { GradeA, GradeB, Temp } from '@pxblue/icons-mui';
import { Schedule } from '@material-ui/icons';
import * as colors from '@pxblue/colors';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginBottom: theme.spacing(4),
        },
        exampleRow: {
            display: 'flex',
            justifyContent: 'space-evenly',
            marginBottom: theme.spacing(2),
        },
        label: {
            marginBottom: theme.spacing(1),
        },
        componentContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1,
        },
    })
);

export const HeroExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <>
            <div className={classes.container}>
                <div className={classes.exampleRow}>
                    <div className={classes.componentContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Basic Usage
                        </Typography>
                        <Hero icon={<GradeA fontSize={'inherit'} />} label={'Efficiency'} style={{ flex: 1 }} />
                    </div>
                    <div className={classes.componentContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            w/ Value and Units
                        </Typography>
                        <Hero
                            icon={<GradeB fontSize={'inherit'} />}
                            label={'Efficiency'}
                            value={'88'}
                            units={'%'}
                            style={{ flex: 1 }}
                        />
                    </div>
                </div>
                <div className={classes.exampleRow}>
                    <div className={classes.componentContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            w/ Channel Value Children
                        </Typography>
                        <Hero icon={<Schedule fontSize={'inherit'} />} label={'Efficiency'} style={{ flex: 1 }}>
                            <ChannelValue fontSize={'large'} value={1} units={'h'} />
                            <ChannelValue fontSize={'large'} value={27} units={'m'} />
                        </Hero>
                    </div>
                    <div className={classes.componentContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            w/ Icon Colors
                        </Typography>
                        <Hero
                            iconBackgroundColor={colors.red[500]}
                            icon={<Temp fontSize={'inherit'} htmlColor={colors.white[50]} />}
                            label={'Temperature'}
                            value={'38'}
                            units={'°C'}
                            style={{ flex: 1 }}
                        />
                    </div>
                </div>
            </div>
            <div className={classes.componentContainer}>
                <Typography variant={'body2'} className={classes.label}>
                    Within a HeroBanner
                </Typography>
                <HeroBanner style={{ width: 376, border: `solid 1px ${colors.gray[50]}`, borderRadius: 4 }}>
                    <Hero icon={<GradeA fontSize={'inherit'} />} label={'Efficiency'} value={'95'} units={'%'} />
                    <Hero icon={<GradeB fontSize={'inherit'} />} label={'Efficiency'} value={'88'} units={'%'} />
                    <Hero icon={<Schedule fontSize={'inherit'} />} label={'Efficiency'}>
                        <ChannelValue fontSize={'large'} value={1} units={'h'} />
                        <ChannelValue fontSize={'large'} value={27} units={'m'} />
                    </Hero>
                    <Hero
                        iconBackgroundColor={colors.red[500]}
                        icon={<Temp fontSize={'inherit'} htmlColor={colors.white[50]} />}
                        label={'Temperature'}
                        value={'38'}
                        units={'°C'}
                    />
                </HeroBanner>
            </div>
        </>
    );
};
