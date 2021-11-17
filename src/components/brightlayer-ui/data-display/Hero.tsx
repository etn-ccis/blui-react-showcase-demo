import React from 'react';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { ChannelValue, Hero, HeroBanner } from '@brightlayer-ui/react-components';
import GradeA from '@brightlayer-ui/icons-mui/GradeA';
import GradeB from '@brightlayer-ui/icons-mui/GradeB';
import Temp from '@brightlayer-ui/icons-mui/Temp';
import Schedule from '@material-ui/icons/Schedule';
import * as colors from '@brightlayer-ui/colors';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
