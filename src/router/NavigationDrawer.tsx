import React, { useState, useCallback, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Menu from '@mui/icons-material/Menu';
import EatonFooterLogoLight from '../EatonLogoLight.png';
import EatonFooterLogoDark from '../EatonLogoDark.png';
import * as Colors from '@brightlayer-ui/colors';
import { useHistory, useLocation } from 'react-router-dom';
import {
    Drawer,
    DrawerBody,
    DrawerNavGroup,
    DrawerFooter,
    DrawerHeader,
    NavItem,
} from '@brightlayer-ui/react-components';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from '../__types__';
import { CLOSE_DRAWER, TOGGLE_DRAWER } from '../redux/actions';
import { SimpleNavItem, pageDefinitions } from './navigation';
import Box from '@mui/material/Box';

const top = require('../assets/topology_40.png');

export const NavigationDrawer: React.FC = () => {
    const open = useSelector((store: AppStore) => store.app.drawerOpen);
    const direction = useSelector((store: AppStore) => store.app.direction);
    const dispatch = useDispatch();
    const theme = useTheme();
    const isDarkMode = useSelector((store: AppStore) => store.app.theme) === 'light' ? false : true;
    const history = useHistory();
    const location = useLocation();
    const [activeRoute, setActiveRoute] = useState(location.pathname);
    const xsDown = useMediaQuery(theme.breakpoints.down('sm'));
    const rtl = direction === 'rtl';

    const createNavItems = useCallback((navData: SimpleNavItem[], parentUrl: string, depth: number): NavItem[] => {
        const convertedItems: NavItem[] = [];
        for (let i = 0; i < navData.length; i++) {
            const item = navData[i];
            if (item.hidden) {
                continue;
            }
            const fullURL = `${parentUrl}${item.url || ''}`;
            convertedItems.push({
                title: item.title,
                subtitle: item.subtitle,
                icon: depth === 0 ? item.icon : undefined,
                itemID: fullURL,
                onClick: item.component
                    ? (): void => {
                          history.push(fullURL);
                      }
                    : undefined,
                items: item.pages ? createNavItems(item.pages, `${parentUrl}${item.url || ''}`, depth + 1) : undefined,
            });
        }
        return convertedItems;
    }, []);

    useEffect(() => {
        setActiveRoute(location.pathname);
    }, [location.pathname]);

    const [menuItems] = useState(createNavItems(pageDefinitions, '', 0));

    return (
        <Drawer
            open={open}
            width={332}
            ModalProps={{
                onBackdropClick: (): void => {
                    dispatch({ type: CLOSE_DRAWER });
                },
            }}
            activeItem={activeRoute}
            activeItemBackgroundShape={'round'}
            variant={xsDown ? 'temporary' : 'persistent'}
        >
            <DrawerHeader
                title={'Showcase App'}
                backgroundColor={Colors.blue[500]}
                fontColor={Colors.white[50]}
                backgroundImage={top}
                icon={<Menu sx={rtl ? { transform: 'scaleX(-1)' } : {}} />}
                onIconClick={(): void => {
                    dispatch({ type: TOGGLE_DRAWER });
                }}
            />
            <DrawerBody>
                <DrawerNavGroup items={menuItems} />
            </DrawerBody>
            <DrawerFooter>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        p: 16,
                    }}
                >
                    <img
                        src={isDarkMode ? EatonFooterLogoDark : EatonFooterLogoLight}
                        alt="Eaton Logo"
                        height={28}
                        width={'auto'}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant={'caption'}>
                            {`Copyright \u00A9 Eaton ${new Date().getFullYear()}`}
                        </Typography>
                        <Typography variant={'caption'}>All Rights Reserved</Typography>
                    </Box>
                </Box>
            </DrawerFooter>
        </Drawer>
    );
};
