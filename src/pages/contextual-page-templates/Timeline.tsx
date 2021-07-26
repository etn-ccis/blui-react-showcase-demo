import React from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { InfoListItem, ListItemTag } from '@pxblue/react-components';
import { createStyles } from '@material-ui/styles';
import { Card } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: `calc(100vh - ${theme.spacing(8)}px)`,
            [theme.breakpoints.down('xs')]: {
                height: `calc(100vh - ${theme.spacing(7)}px)`,
            },
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
    const classes = useStyles(theme);

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
            badge: 'active',
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
        const displayHours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        const displayMinutes = date.getMinutes() >= 9 ? date.getMinutes() : `0${date.getMinutes()}`;
        const timeAbbreviation = date.getHours() >= 11 ? 'PM' : 'AM';

        return `${displayHours}:${displayMinutes} ${timeAbbreviation}`;
    };

    return (
        <div className={classes.container}>
            <Card style={{ width: '80%', marginTop: theme.spacing(4), maxWidth: 1000 }}>
                <InfoListItem
                    title={'Today, Yesterday, Last Week, and Earlier'}
                    style={{ color: theme.palette.primary.main }}
                    hidePadding
                />
                {timelineData.map((data, index) => (
                    <InfoListItem
                        key={index}
                        leftComponent={<span style={{ width: 70 }}>{getDisplayTime(data.date)}</span>}
                        title={`${data.type} ${data.deviceName}`}
                        subtitle={[data.subLocation, data.location]}
                        divider={index === timelineData.length - 1 ? undefined : 'partial'}
                        subtitleSeparator={'<'}
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
