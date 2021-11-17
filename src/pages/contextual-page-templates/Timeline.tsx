import React from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { InfoListItem, ListItemTag } from '@brightlayer-ui/react-components';
import Card from '@material-ui/core/Card';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Notifications from '@material-ui/icons/Notifications';
import NotificationsActive from '@material-ui/icons/NotificationsActive';
import * as colors from '@brightlayer-ui/colors';
import { usePageTitle } from '../../hooks/usePageTitle';

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
        },
    })
);

export type TimelineItem = {
    alarm: 'active' | 'inactive' | 'cleared';
    type: 'High Temperature' | 'Discharge Event' | 'Humidity Alarm';
    date: Date;
    deviceName: string;
    location: string;
    subLocation: string;
    badge?: string;
};

export const Timeline: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles();
    usePageTitle('Timeline');

    const getRandomDate = (): Date => {
        const year = 2021 - Math.floor(Math.random() * 2);
        const month = Math.floor(Math.random() * 11);
        const day = Math.floor(Math.random() * 27);
        const hour = Math.floor(Math.random() * 23);
        const minute = Math.floor(Math.random() * 59);

        return new Date(year, month, day, hour, minute);
    };

    const timelineData: TimelineItem[] = [
        {
            alarm: 'active',
            date: new Date(),
            type: 'High Temperature',
            deviceName: 'Ambient Sensor',
            location: 'Gary Steelworks',
            subLocation: 'Substation 3',
            badge: 'active',
        },
        {
            alarm: 'active',
            date: getRandomDate(),
            type: 'High Temperature',
            deviceName: 'Ambient Sensor',
            location: 'Gary Steelworks',
            subLocation: 'North Mill',
            badge: 'active',
        },
        {
            alarm: 'inactive',
            date: getRandomDate(),
            type: 'Discharge Event',
            deviceName: 'Schweitzer Relay',
            location: 'Edgar Thompson',
            subLocation: 'Substation 12',
        },
        {
            alarm: 'cleared',
            date: getRandomDate(),
            type: 'Humidity Alarm',
            deviceName: 'Eaton Sensor',
            location: 'Edgar Thompson',
            subLocation: 'Substation 12',
        },
        {
            alarm: 'inactive',
            date: getRandomDate(),
            type: 'High Temperature',
            deviceName: 'Ambient Sensor',
            location: 'Gary Steelworks',
            subLocation: 'North Mill',
        },
        {
            alarm: 'active',
            date: getRandomDate(),
            type: 'Discharge Event',
            deviceName: 'Schweitzer Relay',
            location: 'Edgar Thompson',
            subLocation: 'Substation 12',
            badge: 'active',
        },
        {
            alarm: 'cleared',
            date: getRandomDate(),
            type: 'Humidity Alarm',
            deviceName: 'Eaton Sensor',
            location: 'Edgar Thompson',
            subLocation: 'Substation 12',
        },
        {
            alarm: 'cleared',
            date: getRandomDate(),
            type: 'Humidity Alarm',
            deviceName: 'Eaton Sensor',
            location: 'Edgar Thompson',
            subLocation: 'Substation 12',
        },
        {
            alarm: 'cleared',
            date: getRandomDate(),
            type: 'High Temperature',
            deviceName: 'Ambient Sensor',
            location: 'Gary Steelworks',
            subLocation: 'North Mill',
        },
        {
            alarm: 'cleared',
            date: getRandomDate(),
            type: 'Discharge Event',
            deviceName: 'Schweitzer Relay',
            location: 'Edgar Thompson',
            subLocation: 'Substation 12',
        },
    ];

    const getDisplayTime = (date: Date): string => {
        const displayHours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours() === 0 ? 12 : date.getHours();
        const displayMinutes = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;
        const timeAbbreviation = date.getHours() >= 11 ? 'PM' : 'AM';

        return `${displayHours}:${displayMinutes} ${timeAbbreviation}`;
    };

    const getIconColor = (alarm: string): string => {
        switch (alarm) {
            case 'active':
                return colors.white[50];
            case 'inactive':
                return colors.red[500];
            case 'cleared':
            default:
                return colors.gray[500];
        }
    };

    // @TODO: Filter these into time bases sections (today, yesterday, last week, earlier)
    //  add load more events button at the bottom
    //  add date to items older than "yesterday"

    return (
        <div className={classes.container}>
            <Card style={{ width: '80%', marginTop: theme.spacing(4), maxWidth: 1000, marginBottom: theme.spacing(4) }}>
                <InfoListItem
                    title={'Timeline'}
                    style={{ color: theme.palette.primary.main }}
                    hidePadding
                    dense
                    divider={'full'}
                />
                {timelineData.map((data, index) => (
                    <InfoListItem
                        key={index}
                        leftComponent={<span style={{ width: 70 }}>{getDisplayTime(data.date)}</span>}
                        title={`${data.type} ${data.deviceName}`}
                        subtitle={[data.subLocation, data.location]}
                        divider={index === timelineData.length - 1 ? undefined : 'partial'}
                        subtitleSeparator={'<'}
                        icon={data.alarm === 'active' ? <NotificationsActive /> : <Notifications />}
                        iconColor={getIconColor(data.alarm)}
                        iconAlign={'center'}
                        avatar={data.alarm === 'active'}
                        statusColor={
                            data.alarm === 'active' || data.alarm === 'inactive' ? colors.red[500] : 'transparent'
                        }
                        rightComponent={
                            data.badge ? (
                                <>
                                    <ListItemTag label={'active'} backgroundColor={theme.palette.error.main} />
                                    <ChevronRight style={{ marginLeft: theme.spacing(3) }} />
                                </>
                            ) : (
                                <ChevronRight />
                            )
                        }
                    />
                ))}
            </Card>
        </div>
    );
};
