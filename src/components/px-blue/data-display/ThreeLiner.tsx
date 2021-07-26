import React from 'react';
import { useTheme, Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { ChannelValue, ThreeLiner } from '@pxblue/react-components';
import { TrendingUp } from '@material-ui/icons';
import * as colors from '@pxblue/colors';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../__types__';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginBottom: theme.spacing(4),
        },
        iconFlip: {
            transform: 'scaleX(-1)',
        },
    })
);

export const ThreeLinerExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const direction = useSelector((store: AppStore) => store.app.direction);
    const rtl = direction === 'rtl';

    return (
        <>
            <div className={classes.container}>
                <ThreeLiner
                    title={'Three Liner Component'}
                    subtitle={'with basic usage'}
                    info={'...and a third line'}
                />
                <ThreeLiner
                    style={{ marginTop: theme.spacing(4) }}
                    title={'Three Liner Component'}
                    subtitle={'with custom content'}
                    info={
                        <ChannelValue
                            value={'123'}
                            units={'hz'}
                            icon={
                                <TrendingUp htmlColor={colors.red[500]} className={clsx({ [classes.iconFlip]: rtl })} />
                            }
                        />
                    }
                />
            </div>
        </>
    );
};
