import React, { useState, useCallback, ChangeEvent } from 'react';
import top from '../topology_40.png';
import { Gavel, Help, List as ListIcon, Menu, NotificationsActive, Public, Settings } from '@material-ui/icons';
import { Divider, MenuItem, Select, useMediaQuery, makeStyles } from '@material-ui/core';
import { Device } from '@pxblue/icons-mui';
import EatonLogo from '../EatonLogo.svg';
import { useHistory } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import * as Colors from '@pxblue/colors';
import {
    Spacer,
    Drawer,
    DrawerBody,
    DrawerNavGroup,
    DrawerFooter,
    DrawerHeader,
    DrawerSubheader,
} from '@pxblue/react-components';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from '../__types__';
import { CLOSE_DRAWER, TOGGLE_DRAWER } from '../redux/actions';

export const titleList = [
    'Overview',
    'Timeline',
    'Locations',
    'Devices',
    'Settings',
    'Legal',
    'Help',
    'Recent Locations',
    'All Facilities',
];

const useStyles = makeStyles({
    iconFlip: {
        transform: 'scaleX(-1)',
    },
});

export const NavigationDrawer: React.FC = () => {
    const open = useSelector((store: AppStore) => store.app.drawerOpen);
    const direction = useSelector((store: AppStore) => store.app.direction);
    const dispatch = useDispatch();
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const xsDown = useMediaQuery(theme.breakpoints.down('xs'));

    const [location, setLocation] = useState(0);
    const [route, setRoute] = useState(0);

    const rtl = direction === 'rtl';
    const locations = ['All Locations', 'Gary Steelworks', 'Semaine Prochaine'];

    const navigate = useCallback(
        (index) => {
            const newRoute = titleList[index];
            setRoute(index);
            history.push(`${newRoute.toLowerCase().replace(' ', '-')}`);
        },
        [history, setRoute]
    );

    return (
        <Drawer
            open={open}
            width={300}
            ModalProps={{
                onBackdropClick: (): void => {
                    dispatch({ type: CLOSE_DRAWER });
                },
            }}
            activeItem={titleList[route]}
            variant={xsDown ? 'temporary' : 'persistent'}
        >
            <DrawerHeader
                title={'Showcase App'}
                subtitle={'Components in Context'}
                backgroundColor={Colors.blue[500]}
                fontColor={Colors.white[50]}
                backgroundImage={top}
                icon={<Menu className={clsx({ [classes.iconFlip]: rtl })} />}
                onIconClick={(): void => {
                    dispatch({ type: TOGGLE_DRAWER });
                }}
            />
            <DrawerSubheader>
                <Select
                    value={location}
                    onChange={(e: React.ChangeEvent<{ value: unknown }>): void => {
                        setLocation(e.target.value as number);
                    }}
                    style={{ height: theme.spacing(7), padding: theme.spacing(2), width: '100%' }}
                >
                    {locations.map((loc, ind) => (
                        <MenuItem key={`location${ind}`} value={ind}>
                            {loc}
                        </MenuItem>
                    ))}
                </Select>
            </DrawerSubheader>
            <DrawerBody>
                <DrawerNavGroup
                    items={[
                        {
                            title: titleList[0],
                            itemID: titleList[0],
                            icon: <ListIcon className={clsx({ [classes.iconFlip]: rtl })} />,
                            onClick: (): void => {
                                navigate(0);
                                if (xsDown) dispatch({ type: CLOSE_DRAWER });
                            },
                        },
                        {
                            title: titleList[1],
                            itemID: titleList[1],
                            subtitle: '2 Alarms',
                            icon: <NotificationsActive className={clsx({ [classes.iconFlip]: false })} />,
                            onClick: (): void => {
                                navigate(1);
                                if (xsDown) dispatch({ type: CLOSE_DRAWER });
                            },
                        },
                        {
                            title: titleList[2],
                            itemID: titleList[2],
                            icon: <Public className={clsx({ [classes.iconFlip]: false })} />,
                            onClick: (): void => navigate(2),
                            onItemSelect: (): void => {
                                /* do nothing, but need the function to prevent auto-collapse on click */
                            },
                            items: [
                                {
                                    title: titleList[7],
                                    itemID: titleList[7],
                                    onClick: (): void => {
                                        navigate(7);
                                        if (xsDown) dispatch({ type: CLOSE_DRAWER });
                                    },
                                },
                                {
                                    title: titleList[8],
                                    itemID: titleList[8],
                                    onClick: (): void => {
                                        navigate(8);
                                        if (xsDown) dispatch({ type: CLOSE_DRAWER });
                                    },
                                },
                            ],
                        },
                        {
                            title: titleList[3],
                            itemID: titleList[3],
                            icon: <Device className={clsx({ [classes.iconFlip]: false })} />,
                            onClick: (): void => {
                                navigate(3);
                                if (xsDown) dispatch({ type: CLOSE_DRAWER });
                            },
                        },
                    ]}
                />
                <Spacer />
                <Divider />
                <DrawerNavGroup
                    titleContent={
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
                            <div>Account Configuration</div>
                            <div>v1.0.3</div>
                        </div>
                    }
                    items={[
                        {
                            title: titleList[4],
                            itemID: titleList[4],
                            icon: <Settings className={clsx({ [classes.iconFlip]: false })} />,
                            onClick: (): void => {
                                navigate(4);
                                if (xsDown) dispatch({ type: CLOSE_DRAWER });
                            },
                        },
                        {
                            title: titleList[5],
                            itemID: titleList[5],
                            icon: <Gavel className={clsx({ [classes.iconFlip]: false })} />,
                            onClick: (): void => {
                                navigate(5);
                                if (xsDown) dispatch({ type: CLOSE_DRAWER });
                            },
                        },
                        {
                            title: titleList[6],
                            itemID: titleList[6],
                            icon: <Help className={clsx({ [classes.iconFlip]: rtl })} />,
                            onClick: (): void => {
                                navigate(6);
                                if (xsDown) dispatch({ type: CLOSE_DRAWER });
                            },
                        },
                    ]}
                />
            </DrawerBody>
            <DrawerFooter>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        src={EatonLogo}
                        style={{ margin: theme.spacing(1) }}
                        alt="Eaton Logo"
                        height={50}
                        width={'auto'}
                    />
                </div>
            </DrawerFooter>
        </Drawer>
    );
};
