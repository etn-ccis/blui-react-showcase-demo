import React from 'react';
import { useTheme, Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { ChannelValue, InfoListItem } from '@pxblue/react-components';
import * as colors from '@pxblue/colors';
import { Alarm } from '@material-ui/icons';
import { Device, GradeA, Leaf, Temp } from '@pxblue/icons-mui';
import { AppStore } from '../../../__types__';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginBottom: theme.spacing(4),
        },
    })
);

export const InfoListItemExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const direction = useSelector((store: AppStore) => store.app.direction);
    const rtl = direction === 'rtl';

    return (
        <>
            <div className={classes.container}>
                <InfoListItem title={'Basic Usage'} />
                <InfoListItem title={'Info List Item'} subtitle={'with a Subtitle'} />
                <InfoListItem
                    title={'Info List Item'}
                    subtitle={'with an icon'}
                    icon={<Alarm />}
                    iconAlign={'left'}
                    iconColor={colors.black[500]}
                />
                <InfoListItem
                    title={'With an array for subtitle'}
                    subtitle={[
                        <ChannelValue value={'50'} units={'°C'} key="cv1" />,
                        <ChannelValue value={'55'} units={'°C'} key="cv2" />,
                    ]}
                    subtitleSeparator={'·'}
                    icon={<Temp />}
                />
                <InfoListItem title={'Info List Item'} subtitle={'with a partial divider'} divider={'partial'} />
                <InfoListItem title={'Info List Item'} subtitle={'with a full divider'} divider={'full'} />
                <InfoListItem
                    title={'Info List Item'}
                    subtitle={'that is clickable'}
                    ripple={true}
                    onClick={(): void => {}}
                />
                <InfoListItem
                    avatar
                    title={'Info List Item'}
                    subtitle={'with an avatar'}
                    statusColor={colors.green[700]}
                    icon={<GradeA />}
                />
                <InfoListItem
                    title={'Info List Item'}
                    subtitle={'with a background color'}
                    fontColor={colors.black[500]}
                    iconColor={colors.black[500]}
                    icon={<Leaf />}
                    backgroundColor={colors.yellow[500]}
                />
                <InfoListItem
                    title={'Info List Item'}
                    subtitle={'with a left component'}
                    icon={<Device />}
                    leftComponent={
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginRight: !rtl ? 16 : 0,
                                marginLeft: rtl ? 16 : 0,
                            }}
                        >
                            <div>
                                8:32 <strong>AM</strong>
                            </div>
                            <div>11/21/21</div>
                        </div>
                    }
                />
                <InfoListItem
                    title={'Info List Item'}
                    subtitle={'with a right component'}
                    icon={<Device />}
                    rightComponent={<ChannelValue value={'15'} units={'A'} />}
                />
                <InfoListItem
                    title={'Info List Item'}
                    subtitle={'with all properties'}
                    info={'more info...'}
                    icon={<Device />}
                    statusColor={colors.blue[500]}
                    iconColor={colors.black[500]}
                    fontColor={colors.black[500]}
                    backgroundColor={colors.black[50]}
                    divider={'full'}
                    ripple={true}
                    onClick={(): void => {}}
                />
            </div>
        </>
    );
};
