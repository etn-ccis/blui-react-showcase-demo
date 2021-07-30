import React, { useState } from 'react';
import { useTheme, Theme, AppBar, Menu } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { DropdownToolbar, InfoListItem } from '@pxblue/react-components';
import { Apartment, Business, House, Menu as MenuIcon } from '@material-ui/icons';
import * as colors from '@pxblue/colors';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginBottom: theme.spacing(4),
        },
        sectionTitle: {
            marginBottom: theme.spacing(2),
        },
        exampleRow: {
            display: 'flex',
            justifyContent: 'space-evenly',
            marginBottom: theme.spacing(2),
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
    })
);

export const DropdownToolbarExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [dropdownSelection1, setDropdownSelection1] = useState('Item 1');
    const [dropdownSelection2, setDropdownSelection2] = useState('Item 1');
    const [dropdownSelection3, setDropdownSelection3] = useState('Pittsburgh');
    const [dropdownSelection4, setDropdownSelection4] = useState('Item 1');

    const updateDropdown = (prop: string, title: string): void => {
        switch (prop) {
            case 'dropdownSelection1':
                setDropdownSelection1(title);
                break;
            case 'dropdownSelection2':
                setDropdownSelection2(title);
                break;
            case 'dropdownSelection3':
                setDropdownSelection3(title);
                break;
            case 'dropdownSelection4':
                setDropdownSelection4(title);
                break;
            default:
                setDropdownSelection1(title);
        }
    };

    const menuItems = [
        {
            title: 'Item 1',
            onClick: (): void => {
                updateDropdown('dropdownSelection1', 'Item 1');
            },
        },
        {
            title: 'Item 2',
            onClick: (): void => {
                updateDropdown('dropdownSelection1', 'Item 2');
            },
        },
        {
            title: 'Item 3',
            onClick: (): void => {
                updateDropdown('dropdownSelection1', 'Item 3');
            },
        },
    ];

    const menuGroups = [
        {
            items: menuItems,
        },
    ];

    const menuItems2 = [
        {
            title: 'Item 1',
            onClick: (): void => {
                updateDropdown('dropdownSelection2', 'Item 1');
            },
        },
        {
            title: 'Item 2',
            onClick: (): void => {
                updateDropdown('dropdownSelection2', 'Item 2');
            },
        },
        {
            title: 'Item 3',
            onClick: (): void => {
                updateDropdown('dropdownSelection2', 'Item 3');
            },
        },
    ];

    const menuGroups2 = [
        {
            items: menuItems2,
        },
    ];

    const menuItems3 = [
        {
            title: 'Item 1',
            onClick: (): void => {
                updateDropdown('dropdownSelection4', 'Item 1');
            },
        },
        {
            title: 'Item 2',
            onClick: (): void => {
                updateDropdown('dropdownSelection4', 'Item 2');
            },
        },
    ];

    const menuItems4 = [
        {
            title: 'Item 3',
            onClick: (): void => {
                updateDropdown('dropdownSelection4', 'Item 3');
            },
        },
        {
            title: 'Item 4',
            onClick: (): void => {
                updateDropdown('dropdownSelection4', 'Item 4');
            },
        },
    ];

    const menuGroups3 = [
        {
            title: 'MenuGroup 1',
            items: menuItems3,
        },
        {
            title: 'MenuGroup 2',
            items: menuItems4,
        },
    ];

    const getCustomMenu = (): JSX.Element => (
        <Menu open={true}>
            <InfoListItem
                title={'Atlanta'}
                icon={<Business />}
                iconColor={dropdownSelection3 === 'Atlanta' ? colors.red[500] : colors.blue[500]}
                statusColor={dropdownSelection3 === 'Atlanta' ? colors.red[500] : 'transparent'}
                onClick={(): void => updateDropdown('dropdownSelection3', 'Atlanta')}
                dense
            />
            <InfoListItem
                title={'Pittsburgh'}
                icon={<House />}
                iconColor={dropdownSelection3 === 'Pittsburgh' ? colors.red[500] : colors.blue[500]}
                statusColor={dropdownSelection3 === 'Pittsburgh' ? colors.red[500] : 'transparent'}
                onClick={(): void => updateDropdown('dropdownSelection3', 'Pittsburgh')}
                dense
            />
            <InfoListItem
                title={'New York'}
                icon={<Apartment />}
                iconColor={dropdownSelection3 === 'New York' ? colors.red[500] : colors.blue[500]}
                statusColor={dropdownSelection3 === 'New York' ? colors.red[500] : 'transparent'}
                onClick={(): void => updateDropdown('dropdownSelection3', 'New York')}
                dense
            />
        </Menu>
    );

    return (
        <>
            <div className={classes.container}>
                <AppBar color={'primary'} style={{ position: 'relative' }}>
                    <DropdownToolbar
                        title={'Basic Usage'}
                        subtitle={dropdownSelection1}
                        menuGroups={menuGroups}
                    ></DropdownToolbar>
                </AppBar>
            </div>

            <div className={classes.container}>
                <AppBar color={'primary'} style={{ position: 'relative' }}>
                    <DropdownToolbar
                        title={'w/ Nav Icon'}
                        subtitle={dropdownSelection2}
                        menuGroups={menuGroups2}
                        navigationIcon={<MenuIcon />}
                    ></DropdownToolbar>
                </AppBar>
            </div>

            <div className={classes.container}>
                <AppBar color={'primary'} style={{ position: 'relative' }}>
                    <DropdownToolbar
                        title={'w/ Multiple Menu Groups'}
                        subtitle={dropdownSelection4}
                        menuGroups={menuGroups3}
                        navigationIcon={<MenuIcon />}
                    ></DropdownToolbar>
                </AppBar>
            </div>

            <AppBar color={'primary'} style={{ position: 'relative' }}>
                <DropdownToolbar title={'w/ Custom Menu'} subtitle={dropdownSelection3} menu={getCustomMenu()} />
            </AppBar>
        </>
    );
};
