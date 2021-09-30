import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import Email from '@material-ui/icons/Email';
import Menu from '@material-ui/icons/Menu';
import Settings from '@material-ui/icons/Settings';
import InvertColors from '@material-ui/icons/InvertColors';
import SwapHoriz from '@material-ui/icons/SwapHoriz';
import SendIcon from '@material-ui/icons/Send';
import React, { useCallback } from 'react';
import { Spacer, UserMenu } from '@pxblue/react-components';
import clsx from 'clsx';
import { TOGGLE_DIR, TOGGLE_THEME, TOGGLE_DRAWER } from '../redux/actions';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(() =>
    createStyles({
        iconFlip: {
            transform: 'scaleX(-1)',
        },
    })
);

type SharedAppBarProps = {
    title: string;
};

export const SharedAppBar = (props: SharedAppBarProps): JSX.Element => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const rtl = theme.direction === 'rtl';
    const classes = useStyles();
    const smUp = useMediaQuery(theme.breakpoints.up('sm'));
    const { title = 'Showcase' } = props;

    const getNavigationIcon = useCallback((): JSX.Element | undefined => {
        if (smUp) {
            return undefined;
        }
        return (
            <IconButton
                color={'inherit'}
                onClick={(): void => {
                    dispatch({ type: TOGGLE_DRAWER });
                }}
            >
                <Menu className={clsx({ [classes.iconFlip]: false })} />
            </IconButton>
        );
    }, [smUp, classes, dispatch]);

    return (
        <AppBar position={'sticky'} color={'primary'} style={{ zIndex: 10000 }}>
            <Toolbar>
                <Typography variant="h6" style={{ fontWeight: 600, lineHeight: 1 }}>
                    {title}
                </Typography>
                {getNavigationIcon()}
                <Spacer flex={1} />
                <Tooltip title={'Toggle Theme'} aria-label={'toggle the theme of the current showcase'}>
                    <IconButton
                        color={'inherit'}
                        onClick={(): void => {
                            dispatch({ type: TOGGLE_THEME });
                        }}
                    >
                        <InvertColors className={clsx({ [classes.iconFlip]: false })} />
                    </IconButton>
                </Tooltip>
                <Spacer width={theme.spacing(1)} flex={0} />
                <Tooltip title={'Toggle Direction'} aria-label={'toggle the app direction: ltr/rtl'}>
                    <IconButton
                        color={'inherit'}
                        onClick={(): void => {
                            dispatch({ type: TOGGLE_DIR });
                        }}
                    >
                        <SwapHoriz className={clsx({ [classes.iconFlip]: false })} />
                    </IconButton>
                </Tooltip>
                <Spacer width={theme.spacing(1)} flex={0} />
                <UserMenu
                    avatar={<Avatar>MS</Avatar>}
                    menuTitle={'Marshall Sutter'}
                    menuSubtitle={'msutter@acmesteel.com'}
                    menuGroups={[
                        {
                            items: [
                                {
                                    title: 'Log Out',
                                    icon: <SendIcon className={clsx({ [classes.iconFlip]: rtl })} />,
                                },
                                {
                                    title: 'Account Settings',
                                    icon: <Settings className={clsx({ [classes.iconFlip]: false })} />,
                                    divider: true,
                                },
                            ],
                        },
                        {
                            title: 'Contact Us',
                            items: [
                                {
                                    title: 'eatonhelp@eaton.com',
                                    icon: <SendIcon className={clsx({ [classes.iconFlip]: rtl })} />,
                                },
                                {
                                    title: '1-866-905-9988',
                                    icon: <Email className={clsx({ [classes.iconFlip]: false })} />,
                                },
                            ],
                        },
                    ]}
                />
            </Toolbar>
        </AppBar>
    );
};
