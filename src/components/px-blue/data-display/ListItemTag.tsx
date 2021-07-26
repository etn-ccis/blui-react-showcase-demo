import React from 'react';
import { useTheme, Theme, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { InfoListItem, ListItemTag } from '@pxblue/react-components';
import * as colors from '@pxblue/colors';
import { BrightnessMedium } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../__types__';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        sectionTitle: {
            marginBottom: theme.spacing(2),
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

export const ListItemTagExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const direction = useSelector((store: AppStore) => store.app.direction);
    const rtl = direction === 'rtl';

    return (
        <>
            <div className={classes.exampleRow}>
                <div className={classes.componentContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Basic Usage
                    </Typography>
                    <ListItemTag label={'active'} />
                </div>
                <div className={classes.componentContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        w/ Custom Colors
                    </Typography>
                    <ListItemTag label={'active'} backgroundColor={colors.red['500']} fontColor={colors.white['50']} />
                </div>
            </div>
            <div className={classes.componentContainer} style={{ marginTop: theme.spacing(6) }}>
                <Typography variant={'body2'} className={classes.label}>
                    Within an Info List Item
                </Typography>
                <InfoListItem
                    icon={<BrightnessMedium />}
                    title={'Info List Item'}
                    subtitle={'with List Item Tags'}
                    rightComponent={
                        <div style={{ display: 'flex' }}>
                            <ListItemTag
                                label={'Build Passing'}
                                backgroundColor={colors.green[300]}
                                fontColor={colors.black[900]}
                                style={{
                                    marginRight: rtl ? 0 : theme.spacing(2),
                                    marginLeft: rtl ? theme.spacing(2) : 0,
                                }}
                            />
                            <ListItemTag
                                label={'5 Bugs'}
                                backgroundColor={colors.red[300]}
                                fontColor={colors.black[900]}
                            />
                        </div>
                    }
                />
            </div>
        </>
    );
};
