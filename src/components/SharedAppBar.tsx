import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Email from '@mui/icons-material/Email';
import Menu from '@mui/icons-material/Menu';
import Settings from '@mui/icons-material/Settings';
import InvertColors from '@mui/icons-material/InvertColors';
import SwapHoriz from '@mui/icons-material/SwapHoriz';
import SendIcon from '@mui/icons-material/Send';
import React, { useCallback } from 'react';
import { TOGGLE_DIR, TOGGLE_THEME, TOGGLE_DRAWER } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { Spacer, UserMenu } from '@brightlayer-ui/react-components';

type SharedAppBarProps = {
    title: string;
};

export const SharedAppBar = (props: SharedAppBarProps): JSX.Element => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const rtl = theme.direction === 'rtl';
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
                size="large"
            >
                <Menu />
            </IconButton>
        );
    }, [smUp, dispatch]);

    return (
        <AppBar position={'sticky'} color={'primary'} sx={{ zIndex: 10000 }}>
            <Toolbar>
                {getNavigationIcon()}
                <Typography variant="h6" sx={{ fontWeight: 600, lineHeight: 1 }}>
                    {title}
                </Typography>
                <Spacer flex={1} />
                <Tooltip title={'Toggle Theme'} aria-label={'toggle the theme of the current showcase'}>
                    <IconButton
                        color={'inherit'}
                        onClick={(): void => {
                            dispatch({ type: TOGGLE_THEME });
                        }}
                        size="large"
                    >
                        <InvertColors />
                    </IconButton>
                </Tooltip>
                <Spacer width={theme.spacing(1)} flex={0} />
                <Tooltip title={'Toggle Direction'} aria-label={'toggle the app direction: ltr/rtl'}>
                    <IconButton
                        color={'inherit'}
                        onClick={(): void => {
                            dispatch({ type: TOGGLE_DIR });
                        }}
                        size="large"
                    >
                        <SwapHoriz />
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
                                    icon: <SendIcon sx={rtl ? { transform: 'scaleX(-1)' } : {}} />,
                                },
                                {
                                    title: 'Account Settings',
                                    icon: <Settings />,
                                    divider: true,
                                },
                            ],
                        },
                        {
                            title: 'Contact Us',
                            items: [
                                {
                                    title: 'eatonhelp@eaton.com',
                                    icon: <SendIcon sx={rtl ? { transform: 'scaleX(-1)' } : {}} />,
                                },
                                {
                                    title: '1-866-905-9988',
                                    icon: <Email />,
                                },
                            ],
                        },
                    ]}
                />
            </Toolbar>
        </AppBar>
    );
};
