import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { InfoListItem } from '@pxblue/react-components';
import { createStyles } from '@material-ui/styles';
import { Button, Card, Switch } from '@material-ui/core';
import {
    AccountCircle,
    Business,
    Email,
    LocationOn,
    Lock,
    LockOpen,
    Notifications,
    NotificationsOff,
    Phone,
} from '@material-ui/icons';

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
        },
    })
);

export const Settings: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles();
    const [emailNotificationsSetting, setEmailNotificationsSetting] = useState(true);
    const [textNotificationsSetting, setTextNotificationsSetting] = useState(false);
    const [autoLogOutSetting, setAutoLogOutSetting] = useState(true);

    return (
        <div className={classes.container}>
            <Card style={{ width: '80%', marginTop: theme.spacing(4), maxWidth: 1000, marginBottom: theme.spacing(3) }}>
                <InfoListItem
                    title={'Organization'}
                    style={{ color: theme.palette.primary.main }}
                    hidePadding
                    dense
                    divider={'full'}
                />
                <InfoListItem
                    title={'Acme Steel Co.'}
                    subtitle={'Organization Name'}
                    icon={<Business />}
                    divider={'full'}
                />
                <InfoListItem
                    title={'1000 Acme Way Gary, In 46402'}
                    subtitle={'Address'}
                    icon={<LocationOn />}
                    wrapTitle
                />
            </Card>
            <Card style={{ width: '80%', maxWidth: 1000, marginBottom: theme.spacing(4) }}>
                <InfoListItem
                    title={'Account'}
                    style={{ color: theme.palette.primary.main }}
                    hidePadding
                    dense
                    divider={'full'}
                />
                <InfoListItem title={'Marshall Sutter'} subtitle={'Name'} icon={<AccountCircle />} divider={'full'} />
                <InfoListItem title={'msutter@acmesteelco.com'} subtitle={'Email'} icon={<Email />} divider={'full'} />
                <InfoListItem title={'+1 (724) 998-0938'} subtitle={'Phone Number'} icon={<Phone />} divider={'full'} />
                <InfoListItem
                    title={'************'}
                    subtitle={'Password'}
                    icon={<Lock />}
                    divider={'full'}
                    rightComponent={
                        <Button variant={'outlined'} color={'primary'}>
                            Change Password{' '}
                        </Button>
                    }
                />
                <InfoListItem
                    title={'Email Notifications'}
                    subtitle={emailNotificationsSetting ? 'Enabled' : 'Disabled'}
                    icon={emailNotificationsSetting ? <Notifications /> : <NotificationsOff />}
                    divider={'full'}
                    rightComponent={
                        <Switch
                            checked={emailNotificationsSetting}
                            onChange={(event): void => setEmailNotificationsSetting(event.target.checked)}
                        />
                    }
                />
                <InfoListItem
                    title={'Text Notifications'}
                    subtitle={textNotificationsSetting ? 'Enabled' : 'Disabled'}
                    icon={textNotificationsSetting ? <Notifications /> : <NotificationsOff />}
                    divider={'full'}
                    rightComponent={
                        <Switch
                            checked={textNotificationsSetting}
                            onChange={(event): void => setTextNotificationsSetting(event.target.checked)}
                        />
                    }
                />
                <InfoListItem
                    title={'Automatic Log Out'}
                    subtitle={autoLogOutSetting ? 'Enabled (Recommended)' : 'Disabled'}
                    icon={autoLogOutSetting ? <Lock /> : <LockOpen />}
                    rightComponent={
                        <Switch
                            checked={autoLogOutSetting}
                            onChange={(event): void => setAutoLogOutSetting(event.target.checked)}
                        />
                    }
                />
            </Card>
        </div>
    );
};
