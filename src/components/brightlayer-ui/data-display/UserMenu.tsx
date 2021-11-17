import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Spacer, UserMenu } from '@brightlayer-ui/react-components';
import Email from '@material-ui/icons/Email';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Pets from '@material-ui/icons/Pets';
import Settings from '@material-ui/icons/Settings';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../__types__';
import * as colors from '@brightlayer-ui/colors';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        exampleRow: {
            display: 'flex',
            justifyContent: 'space-evenly',
            marginBottom: theme.spacing(4),
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
        iconFlip: {
            transform: 'scaleX(-1)',
        },
        customAvatar: {
            color: colors.white[50],
            backgroundColor: colors.blue[800],
        },
        paper: {
            backgroundColor: colors.white[50],
        },
    })
);

export const UserMenuExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
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
            icon: <ExitToApp className={clsx({ [classes.iconFlip]: rtl })} />,
            onClick: (): void => {},
        },
    ];

    return (
        <>
            <div className={classes.exampleRow}>
                <div className={classes.componentContainer}>
                    <Typography variant={'body2'} className={classes.label}>
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
                </div>
                <div className={classes.componentContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        w/ Custom Colors
                    </Typography>
                    <UserMenu
                        avatar={<Avatar classes={{ root: classes.customAvatar }}>UI</Avatar>}
                        menuGroups={[
                            {
                                items: defaultMenuGroup,
                                fontColor: colors.blue[800],
                                iconColor: colors.blue[800], // @TODO: FIX ME - looks like this isn't working... this needs fixed in storybook too
                            },
                        ]}
                        MenuProps={{ classes: { paper: classes.paper } }}
                        onOpen={(): void => {}}
                        onClose={(): void => {}}
                    />
                </div>
            </div>
            <div className={classes.exampleRow}>
                <div className={classes.componentContainer}>
                    <Typography variant={'body2'} className={classes.label}>
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
                </div>
                <div className={classes.componentContainer}>
                    <Typography variant={'body2'} className={classes.label}>
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
                </div>
            </div>
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
