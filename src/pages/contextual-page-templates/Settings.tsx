import React, { useCallback, useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { InputProps } from '@material-ui/core/Input';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import useTheme from '@material-ui/core/styles/useTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { InfoListItem } from '@brightlayer-ui/react-components';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Business from '@material-ui/icons/Business';
import Email from '@material-ui/icons/Email';
import LocationOn from '@material-ui/icons/LocationOn';
import Lock from '@material-ui/icons/Lock';
import LockOpen from '@material-ui/icons/LockOpen';
import Notifications from '@material-ui/icons/Notifications';
import NotificationsOff from '@material-ui/icons/NotificationsOff';
import Phone from '@material-ui/icons/Phone';
import { usePageTitle } from '../../hooks/usePageTitle';

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

type OnChangeHandler = InputProps['onChange'];

export const Settings: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles();
    const [emailNotificationsSetting, setEmailNotificationsSetting] = useState(true);
    const [textNotificationsSetting, setTextNotificationsSetting] = useState(false);
    const [autoLogOutSetting, setAutoLogOutSetting] = useState(true);
    const [nickname, setNickname] = useState('Marsh-mallow');
    usePageTitle('Settings');

    const onNicknameChange: OnChangeHandler = useCallback(
        (event) => {
            setNickname(event.target.value);
        },
        [setNickname]
    );

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
                <InfoListItem
                    title={nickname}
                    subtitle={'Nickname'}
                    icon={<AccountCircle />}
                    divider={'full'}
                    rightComponent={
                        <TextField
                            id={'nickname'}
                            variant={'outlined'}
                            label={'Nickname'}
                            value={nickname}
                            onChange={onNicknameChange}
                        />
                    }
                />
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
