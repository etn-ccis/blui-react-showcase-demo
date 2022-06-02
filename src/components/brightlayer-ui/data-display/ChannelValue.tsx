import React from 'react';
import Typography from '@mui/material/Typography';
import { useTheme, Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { ChannelValue } from '@brightlayer-ui/react-components';
import TrendingUp from '@mui/icons-material/TrendingUp';
import * as colors from '@brightlayer-ui/colors';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../__types__';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        sectionTitle: {
            marginBottom: theme.spacing(2),
        },
        componentContainer: {
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            marginBottom: theme.spacing(4),
        },
        iconFlip: {
            transform: 'scaleX(-1)',
        },
    })
);

export const ChannelValueExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const direction = useSelector((store: AppStore) => store.app.direction);
    const rtl = direction === 'rtl';

    return (
        <>
            <div className={classes.componentContainer}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Basic Usage
                </Typography>
                <ChannelValue value={'123'} />
            </div>
            <div className={classes.componentContainer}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    w/ Units
                </Typography>
                <ChannelValue value={'123'} units={'hz'} />
            </div>
            <div className={classes.componentContainer}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    w/ Icon
                </Typography>
                <ChannelValue
                    value={'123'}
                    units={'hz'}
                    icon={<TrendingUp htmlColor={colors.red[500]} className={clsx({ [classes.iconFlip]: rtl })} />}
                />
            </div>
            <div className={classes.componentContainer}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    w/ Custom Font Size
                </Typography>
                <ChannelValue
                    value={'123'}
                    units={'hz'}
                    fontSize={24}
                    icon={<TrendingUp htmlColor={colors.red[500]} className={clsx({ [classes.iconFlip]: rtl })} />}
                />
            </div>
        </>
    );
};
