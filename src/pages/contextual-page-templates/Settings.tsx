import React, { useCallback, useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { InputProps } from '@mui/material/Input';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import { InfoListItem } from '@brightlayer-ui/react-components';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Business from '@mui/icons-material/Business';
import Email from '@mui/icons-material/Email';
import LocationOn from '@mui/icons-material/LocationOn';
import Lock from '@mui/icons-material/Lock';
import LockOpen from '@mui/icons-material/LockOpen';
import Notifications from '@mui/icons-material/Notifications';
import NotificationsOff from '@mui/icons-material/NotificationsOff';
import Phone from '@mui/icons-material/Phone';
import { usePageTitle } from '../../hooks/usePageTitle';
import Box from '@mui/material/Box';

type OnChangeHandler = InputProps['onChange'];

export const Settings: React.FC = () => {
    const theme = useTheme();
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
        <Box
            sx={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Card sx={{ width: '80%', mt: 4, maxWidth: 1000, mb: 3 }}>
                <InfoListItem
                    title={'Organization'}
                    sx={{ color: theme.palette.primary.main }}
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
            <Card sx={{ width: '80%', maxWidth: 1000, mb: 4 }}>
                <InfoListItem
                    title={'Account'}
                    sx={{ color: theme.palette.primary.main }}
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
        </Box>
    );
};
