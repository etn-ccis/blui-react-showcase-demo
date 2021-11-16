import React from 'react';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import * as colors from '@brightlayer-ui/colors';
import { Spacer } from '@brightlayer-ui/react-components';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        sectionTitle: {
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
        horizontalFlex: {
            width: '100%',
            height: 50,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            color: colors.black[900],
            marginBottom: theme.spacing(1),
        },
        verticalFlex: {
            width: '100%',
            height: 150,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            color: colors.black[900],
        },
        horizontalStatic: {
            width: '100%',
            height: 50,
            display: 'inline',
            color: colors.black[900],
            marginBottom: theme.spacing(1),
        },
        verticalStatic: {
            width: '100%',
            color: colors.black[900],
        },
    })
);

export const SpacerExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <>
            <Typography variant={'body1'} className={classes.sectionTitle}>
                w/ Flex Layout
            </Typography>
            <div className={classes.componentContainer}>
                <Typography variant={'body2'} className={classes.label}>
                    Horizontal
                </Typography>
                <div className={classes.horizontalFlex}>
                    <Spacer flex={1} style={{ background: colors.blue[300] }}>
                        1
                    </Spacer>
                    <Spacer flex={1} style={{ background: colors.yellow[300] }}>
                        2
                    </Spacer>
                    <Spacer flex={1} style={{ background: colors.red[300] }}>
                        3
                    </Spacer>
                </div>
            </div>
            <div className={classes.componentContainer}>
                <Typography variant={'body2'} className={classes.label}>
                    Vertical
                </Typography>
                <div className={classes.verticalFlex}>
                    <Spacer flex={1} style={{ background: colors.blue[300] }}>
                        1
                    </Spacer>
                    <Spacer flex={1} style={{ background: colors.yellow[300] }}>
                        2
                    </Spacer>
                    <Spacer flex={1} style={{ background: colors.red[300] }}>
                        3
                    </Spacer>
                </div>
            </div>
            <Typography variant={'body1'} className={classes.sectionTitle} style={{ marginTop: theme.spacing(4) }}>
                w/ Static Layout
            </Typography>
            <div className={classes.componentContainer}>
                <Typography variant={'body2'} className={classes.label}>
                    Horizontal
                </Typography>
                <div className={classes.horizontalStatic}>
                    <Spacer width={60} height={50} style={{ background: colors.blue[300], display: 'inline-block' }}>
                        1
                    </Spacer>
                    <Spacer width={60} height={50} style={{ background: colors.yellow[300], display: 'inline-block' }}>
                        2
                    </Spacer>
                    <Spacer width={60} height={50} style={{ background: colors.red[300], display: 'inline-block' }}>
                        3
                    </Spacer>
                </div>
            </div>
            <div className={classes.componentContainer}>
                <Typography variant={'body2'} className={classes.label}>
                    Vertical
                </Typography>
                <div className={classes.verticalStatic}>
                    <Spacer height={50} style={{ background: colors.blue[300] }}>
                        1
                    </Spacer>
                    <Spacer height={50} style={{ background: colors.yellow[300] }}>
                        2
                    </Spacer>
                    <Spacer height={50} style={{ background: colors.red[300] }}>
                        3
                    </Spacer>
                </div>
            </div>
        </>
    );
};
