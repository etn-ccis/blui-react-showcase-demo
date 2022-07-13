import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Spacer, UserMenu } from '@brightlayer-ui/react-components';
import Email from '@mui/icons-material/Email';
import ExitToApp from '@mui/icons-material/ExitToApp';
import Pets from '@mui/icons-material/Pets';
import Settings from '@mui/icons-material/Settings';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../__types__';
import * as colors from '@brightlayer-ui/colors';
import Box from '@mui/material/Box';

const ExampleRowStyles = {
    display: 'flex',
    justifyContent: 'space-evenly',
    mb: 4,
};

const ComponentContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
};

const LabelStyles = {
    mb: 1,
};

const AvatarStyles = {
    color: colors.white[50],
    backgroundColor: colors.blue[800],
};

export const UserMenuExample: React.FC = () => {
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
            <Box sx={ExampleRowStyles}>
                <Box sx={ComponentContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Basic Usage
                    </Typography>
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
                </Box>
                <Box sx={ComponentContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        w/ Custom Colors
                    </Typography>
                    <UserMenu
                        avatar={<Avatar sx={AvatarStyles}>UI</Avatar>}
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
                </Box>
            </Box>
            <Box sx={ExampleRowStyles}>
                <Box sx={ComponentContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        w/ Non-Text Avatar
                    </Typography>
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
                </Box>
                <Box sx={ComponentContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        w/ a Menu Header
                    </Typography>
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
                </Box>
            </Box>
            <Box sx={{ width: '100%', mt: 4 }}>
                <AppBar position={'relative'} color={'primary'}>
                    <Toolbar
                        disableGutters
                        sx={{
                            pt: 0,
                            minHeight: 'unset',
                            height: '4rem',
                            px: 2,
                        }}
                    >
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
            </Box>
        </>
    );
};
