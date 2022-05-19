import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useTheme, styled } from '@mui/material/styles';
import { Spacer, UserMenu } from '@brightlayer-ui/react-components';
import Email from '@mui/icons-material/Email';
import ExitToApp from '@mui/icons-material/ExitToApp';
import Pets from '@mui/icons-material/Pets';
import Settings from '@mui/icons-material/Settings';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../__types__';
import * as colors from '@brightlayer-ui/colors';
import Box from '@mui/material/Box';

const ExampleRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-evenly',
    marginBottom: theme.spacing(4),
}));

const ComponentContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
}));

const Label = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(1),
}));

const CustomAvatar = styled(Avatar)(() => ({
    color: colors.white[50],
    backgroundColor: colors.blue[800],
}));

export const UserMenuExample: React.FC = () => {
    const theme = useTheme();
    const direction = useSelector((store: AppStore) => store.app.direction);
    const rtl = direction === 'rtl';

    const defaultMenuGroup = [
        {
            title: 'Settings',
            icon: <Settings />,
            onClick: (): void => {},
        },
        {
            title: 'Contact Us',
            icon: <Email />,
            onClick: (): void => {},
        },
        {
            title: 'Log Out',
            icon: <ExitToApp sx={rtl ? { transform: 'scaleX(-1)' } : {}} />,
            onClick: (): void => {},
        },
    ];

    return (
        <>
            <ExampleRow>
                <ComponentContainer>
                    <Label variant={'body2'}>Basic Usage</Label>
                    <UserMenu
                        avatar={<Avatar>UI</Avatar>}
                        menuGroups={[
                            {
                                items: defaultMenuGroup,
                            },
                        ]}
                        onOpen={(): void => {}}
                        onClose={(): void => {}}
                    />
                </ComponentContainer>
                <ComponentContainer>
                    <Label variant={'body2'}>w/ Custom Colors</Label>
                    <UserMenu
                        avatar={<CustomAvatar>UI</CustomAvatar>}
                        menuGroups={[
                            {
                                items: defaultMenuGroup,
                                fontColor: colors.blue[800],
                                iconColor: colors.blue[800], // @TODO: FIX ME - looks like this isn't working... this needs fixed in storybook too
                            },
                        ]}
                        onOpen={(): void => {}}
                        onClose={(): void => {}}
                    />
                </ComponentContainer>
            </ExampleRow>
            <ExampleRow>
                <ComponentContainer>
                    <Label variant={'body2'}>w/ Non-Text Avatar</Label>
                    <UserMenu
                        avatar={
                            <Avatar>
                                <Pets />
                            </Avatar>
                        }
                        menuGroups={[
                            {
                                items: defaultMenuGroup,
                            },
                        ]}
                        onOpen={(): void => {}}
                        onClose={(): void => {}}
                    />
                </ComponentContainer>
                <ComponentContainer>
                    <Label variant={'body2'}>w/ a Menu Header</Label>
                    <UserMenu
                        avatar={<Avatar>UI</Avatar>}
                        menuGroups={[
                            {
                                items: defaultMenuGroup,
                            },
                        ]}
                        onOpen={(): void => {}}
                        onClose={(): void => {}}
                        menuTitle={'Menu Title'}
                        menuSubtitle={'Menu Subtitle'}
                    />
                </ComponentContainer>
            </ExampleRow>
            <div style={{ width: '100%', marginTop: theme.spacing(4) }}>
                <AppBar position={'relative'} color={'primary'}>
                    <Toolbar style={{ padding: '0 16px', minHeight: 'unset', height: '4rem' }}>
                        <Typography variant={'h6'}>UserMenu within a Toolbar</Typography>
                        <Spacer flex={1} />
                        <UserMenu
                            avatar={<Avatar />}
                            menuGroups={[
                                {
                                    items: defaultMenuGroup,
                                },
                            ]}
                            menuTitle={'Jane Doe'}
                            menuSubtitle={'Account Manager'}
                            onOpen={(): void => {}}
                            onClose={(): void => {}}
                        />
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
};
