import React from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { ChannelValue, ThreeLiner } from '@brightlayer-ui/react-components';
import TrendingUp from '@material-ui/icons/TrendingUp';
import * as colors from '@brightlayer-ui/colors';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../__types__';
import clsx from 'clsx';

const useStyles = makeStyles(() =>
    createStyles({
        iconFlip: {
            transform: 'scaleX(-1)',
        },
    })
);

export const ThreeLinerExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles();
    const direction = useSelector((store: AppStore) => store.app.direction);
    const rtl = direction === 'rtl';

    return (
        <>
            <ThreeLiner title={'Three Liner Component'} subtitle={'with basic usage'} info={'...and a third line'} />
            <ThreeLiner
                style={{ marginTop: theme.spacing(4) }}
                title={'Three Liner Component'}
                subtitle={'with custom content'}
                info={
                    <ChannelValue
                        value={'123'}
                        units={'hz'}
                        icon={<TrendingUp htmlColor={colors.red[500]} className={clsx({ [classes.iconFlip]: rtl })} />}
                    />
                }
            />
        </>
    );
};
