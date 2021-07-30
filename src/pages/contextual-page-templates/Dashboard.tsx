import React from 'react';
import * as Colors from '@pxblue/colors';
import { useTheme, makeStyles, createStyles } from '@material-ui/core/styles';
import {
    Hero,
    HeroBanner,
    ChannelValue,
    EmptyState,
    InfoListItem,
    ScoreCard,
    DrawerNavGroup,
    ListItemTag,
} from '@pxblue/react-components';
import { List, Card, Button, useMediaQuery } from '@material-ui/core';
import {
    Add,
    Remove,
    List as ListIcon,
    Settings,
    MoreVert,
    Timer,
    TrendingUp,
    Devices as DevicesIcon,
} from '@material-ui/icons';
import { Pie, Battery } from '@pxblue/react-progress-icons';
import { GradeA, Leaf, CurrentCircled, VoltageCircled, Temp, Moisture as Humidity } from '@pxblue/icons-mui';
import clsx from 'clsx';

import top from '../../assets/topology_40.png';
import { usePageTitle } from '../../hooks/usePageTitle';

const useStyles = makeStyles((theme) =>
    createStyles({
        scorecard: {
            flex: '1 1 0px',
            width: '100%',
            maxWidth: '416px',
            minWidth: '350px',
        },
        listTag: {
            marginRight: theme.spacing(1),
        },
        iconFlip: {
            transform: 'scaleX(-1)',
        },
    })
);

export const Dashboard: React.FC = () => {
    const theme = useTheme();
    const rtl = theme.direction === 'rtl';
    const classes = useStyles();
    const mdUp = useMediaQuery(theme.breakpoints.up('md'));
    usePageTitle('Dashboard');

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
                style={{
                    padding: theme.spacing(2),
                    flex: 1,
                    width: '80%',
                    maxWidth: 1000,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <ScoreCard
                        headerColor={Colors.red[500]}
                        headerBackgroundImage={top}
                        headerTitle={'Substation 3'}
                        headerSubtitle={'High Humidity Alarm'}
                        headerInfo={'4 Devices'}
                        headerFontColor={Colors.white[50]}
                        actionItems={[<MoreVert key={'action1'} className={clsx({ [classes.iconFlip]: rtl })} />]}
                        badge={
                            <HeroBanner style={{ minWidth: 210 }}>
                                <Hero
                                    icon={
                                        <Temp
                                            fontSize={'inherit'}
                                            htmlColor={Colors.gray[500]}
                                            className={clsx({ [classes.iconFlip]: false })}
                                        />
                                    }
                                    label={'Temperature'}
                                    iconSize={48}
                                    value={98}
                                    units={'°F'}
                                    fontSize={'normal'}
                                />
                                <Hero
                                    icon={
                                        <Humidity
                                            fontSize={'inherit'}
                                            htmlColor={Colors.blue[300]}
                                            className={clsx({ [classes.iconFlip]: false })}
                                        />
                                    }
                                    label={'Humidity'}
                                    value={54}
                                    units={'%'}
                                    iconSize={48}
                                    fontSize={'normal'}
                                />
                            </HeroBanner>
                        }
                        badgeOffset={0}
                        actionRow={<InfoListItem dense chevron title={'More'} hidePadding />}
                        classes={{ root: classes.scorecard }}
                        style={{
                            marginRight: mdUp ? theme.spacing(2) : 0,
                            marginBottom: theme.spacing(2),
                        }}
                    >
                        <List style={{ padding: '16px 0' }}>
                            <InfoListItem
                                dense
                                style={{ height: 36 }}
                                fontColor={Colors.red[500]}
                                iconColor={Colors.red[500]}
                                title={'1 Alarm'}
                                icon={<Leaf color={'inherit'} className={clsx({ [classes.iconFlip]: false })} />}
                            />
                            <InfoListItem
                                dense
                                style={{ height: 36 }}
                                fontColor={Colors.blue[500]}
                                iconColor={Colors.blue[500]}
                                title={'1 Event'}
                                icon={<Leaf color={'inherit'} className={clsx({ [classes.iconFlip]: false })} />}
                            />
                            <InfoListItem
                                dense
                                style={{ height: 36 }}
                                title={'Online'}
                                icon={<Leaf color={'inherit'} className={clsx({ [classes.iconFlip]: false })} />}
                            />
                        </List>
                    </ScoreCard>
                    <ScoreCard
                        headerColor={Colors.blue[500]}
                        headerBackgroundImage={top}
                        headerTitle={'Substation 3'}
                        headerSubtitle={'Normal'}
                        headerInfo={'4 Devices'}
                        headerFontColor={Colors.white[50]}
                        actionItems={[<MoreVert key={'action1'} className={clsx({ [classes.iconFlip]: false })} />]}
                        badge={
                            <HeroBanner>
                                <Hero
                                    icon={
                                        <GradeA
                                            fontSize={'inherit'}
                                            htmlColor={Colors.green[500]}
                                            className={clsx({ [classes.iconFlip]: false })}
                                        />
                                    }
                                    iconBackgroundColor={theme.palette.background.paper}
                                    label={'Health'}
                                    iconSize={72}
                                    value={98}
                                    units={'%'}
                                    fontSize={'normal'}
                                />
                            </HeroBanner>
                        }
                        badgeOffset={-52}
                        actionRow={<InfoListItem dense chevron title={'View Location'} hidePadding />}
                        classes={{ root: classes.scorecard }}
                        style={{ marginBottom: theme.spacing(2) }}
                    >
                        <List style={{ padding: '16px 0' }}>
                            <InfoListItem
                                dense
                                style={{ height: 36 }}
                                title={'0 Alarms'}
                                icon={<Leaf color={'inherit'} className={clsx({ [classes.iconFlip]: false })} />}
                            />
                            <InfoListItem
                                dense
                                style={{ height: 36 }}
                                fontColor={Colors.blue[500]}
                                iconColor={Colors.blue[500]}
                                title={'1 Event'}
                                icon={<Leaf color={'inherit'} className={clsx({ [classes.iconFlip]: false })} />}
                            />
                            <InfoListItem
                                dense
                                style={{ height: 36 }}
                                title={'Online'}
                                icon={<Leaf color={'inherit'} className={clsx({ [classes.iconFlip]: false })} />}
                            />
                        </List>
                    </ScoreCard>
                </div>

                <Card style={{ maxWidth: 416 * 2 + theme.spacing(2) }}>
                    <List style={{ padding: 0 }}>
                        <HeroBanner divider>
                            <Hero
                                icon={
                                    <GradeA
                                        fontSize={'inherit'}
                                        color={'inherit'}
                                        htmlColor={Colors.green[500]}
                                        className={clsx({ [classes.iconFlip]: false })}
                                    />
                                }
                                label={'Healthy'}
                                value={96}
                                units={'/100'}
                                fontSize={'normal'}
                            />
                            <Hero
                                icon={
                                    <Pie
                                        color={Colors.blue[500]}
                                        percent={65}
                                        size={36}
                                        // @ts-ignore until we publish the updated type definitions
                                        className={clsx({ [classes.iconFlip]: false })}
                                    />
                                }
                                label={'Load'}
                                fontSize={'normal'}
                            >
                                <ChannelValue
                                    value={65}
                                    units={'%'}
                                    icon={
                                        <TrendingUp
                                            htmlColor={Colors.red[500]}
                                            fontSize={'inherit'}
                                            className={clsx({ [classes.iconFlip]: rtl })}
                                        />
                                    }
                                />
                            </Hero>
                            <Hero
                                icon={
                                    <Timer
                                        fontSize={'inherit'}
                                        color={'inherit'}
                                        className={clsx({ [classes.iconFlip]: false })}
                                    />
                                }
                                label={'Estimated'}
                                fontSize={'normal'}
                            >
                                <ChannelValue value={1} units={'h'} />
                                <ChannelValue value={26} units={'m'} />
                            </Hero>
                            <Hero
                                icon={
                                    <Battery
                                        color={Colors.blue[500]}
                                        percent={100}
                                        size={36}
                                        // @ts-ignore until we publish the updated type definitions
                                        className={clsx({ [classes.iconFlip]: rtl })}
                                    />
                                }
                                value={'Full'}
                                label={'Battery'}
                                fontSize={'normal'}
                            >
                                <ChannelValue value={'Full'} />
                            </Hero>
                        </HeroBanner>
                        <InfoListItem
                            dense
                            title={'Status'}
                            divider={'full'}
                            statusColor={Colors.green[500]}
                            subtitleSeparator={'/'}
                            icon={<Leaf color={'inherit'} className={clsx({ [classes.iconFlip]: false })} />}
                            iconAlign={'center'}
                            rightComponent={<ChannelValue fontSize={16} value={'Online, ESS+'} />}
                        />
                        <InfoListItem
                            title={'Input Voltage'}
                            divider={'full'}
                            avatar
                            subtitle={['Phase A', 'Phase B', 'Phase C']}
                            icon={<VoltageCircled className={clsx({ [classes.iconFlip]: false })} />}
                            rightComponent={
                                <span>
                                    <ChannelValue fontSize={16} value={478} units={'V'} />,{' '}
                                    <ChannelValue fontSize={16} value={479} units={'V'} />,{' '}
                                    <ChannelValue fontSize={16} value={473} units={'V'} />
                                </span>
                            }
                        />
                        <InfoListItem
                            title={'Output Voltage'}
                            divider={'full'}
                            avatar
                            statusColor={Colors.red[500]}
                            fontColor={Colors.red[500]}
                            subtitle={['Phase A', 'Phase B', 'Phase C']}
                            icon={<VoltageCircled color={'inherit'} className={clsx({ [classes.iconFlip]: false })} />}
                            rightComponent={
                                <div style={{ display: 'flex', alignItems: 'center', color: Colors.red[500] }}>
                                    <ListItemTag label={'monitored'} classes={{ root: classes.listTag }} />
                                    <ChannelValue fontSize={16} value={480} units={'V'} />,{' '}
                                    <ChannelValue fontSize={16} value={480} units={'V'} />,{' '}
                                    <ChannelValue fontSize={16} value={480} units={'V'} />
                                </div>
                            }
                        />
                        <InfoListItem
                            dense
                            title={'Output Current'}
                            divider={'full'}
                            icon={<CurrentCircled color={'inherit'} className={clsx({ [classes.iconFlip]: false })} />}
                            iconAlign={'center'}
                            rightComponent={
                                <span>
                                    <ChannelValue fontSize={16} value={15} units={'A'} />,{' '}
                                    <ChannelValue fontSize={16} value={14.9} units={'A'} />,{' '}
                                    <ChannelValue fontSize={16} value={15} units={'A'} />
                                </span>
                            }
                        />
                        <InfoListItem
                            dense
                            title={'Temperature'}
                            icon={<Temp className={clsx({ [classes.iconFlip]: false })} />}
                            iconAlign={'center'}
                            rightComponent={
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <ListItemTag
                                        backgroundColor={theme.palette.background.default}
                                        label={'active'}
                                        fontColor={
                                            theme.palette.type === 'light' ? Colors.blue[700] : Colors.green['500']
                                        }
                                        classes={{ root: classes.listTag }}
                                    />
                                    <ListItemTag
                                        label={'OVERHEAT'}
                                        backgroundColor={Colors.red['500']}
                                        classes={{ root: classes.listTag }}
                                    />
                                    <ChannelValue
                                        fontSize={16}
                                        icon={
                                            <TrendingUp
                                                htmlColor={Colors.red[500]}
                                                className={clsx({ [classes.iconFlip]: rtl })}
                                            />
                                        }
                                        value={68}
                                        units={'°F'}
                                    />
                                </div>
                            }
                        />
                    </List>
                </Card>
                <Card
                    style={{
                        marginTop: theme.spacing(2),
                        padding: theme.spacing(3),
                        maxWidth: 416 * 2 + theme.spacing(2),
                    }}
                >
                    <EmptyState
                        icon={<DevicesIcon fontSize={'inherit'} className={clsx({ [classes.iconFlip]: false })} />}
                        title={'No Devices'}
                        description={'Contact your local admin for details'}
                        actions={
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<Add className={clsx({ [classes.iconFlip]: false })} />}
                            >
                                Add Device
                            </Button>
                        }
                    />
                </Card>
                <Card style={{ marginTop: theme.spacing(2), maxWidth: 416 * 2 + theme.spacing(2) }}>
                    <DrawerNavGroup
                        title={'Resources'}
                        items={[
                            {
                                title: 'Guides',
                                itemID: 'Guides',
                                icon: <DevicesIcon className={clsx({ [classes.iconFlip]: false })} />,
                                rightComponent: <ListItemTag label={'new'} />,
                                expandIcon: <Add className={clsx({ [classes.iconFlip]: false })} />,
                                collapseIcon: <Remove className={clsx({ [classes.iconFlip]: false })} />,
                                items: [
                                    {
                                        title: 'Installation Manual',
                                        itemID: 'Installation Manual',
                                        items: [
                                            {
                                                title: '101',
                                                itemID: '101',
                                            },
                                            {
                                                title: '102',
                                                itemID: '102',
                                            },
                                        ],
                                    },
                                    {
                                        title: 'Maintenance',
                                        itemID: 'Maintenance',
                                    },
                                ],
                            },
                            {
                                title: 'Quality Control',
                                itemID: 'Quality Control',
                                icon: <Settings className={clsx({ [classes.iconFlip]: false })} />,
                                items: [
                                    {
                                        title: 'Training',
                                        itemID: 'Training',
                                    },
                                    {
                                        title: 'Checklist',
                                        itemID: 'Checklist',
                                    },
                                ],
                            },
                            {
                                title: 'Report',
                                itemID: 'Report',
                                icon: <ListIcon className={clsx({ [classes.iconFlip]: rtl })} />,
                                divider: false,
                                items: [
                                    {
                                        title: '2020',
                                        itemID: '2020',
                                    },
                                    {
                                        title: '2021',
                                        itemID: '2021',
                                    },
                                ],
                            },
                        ]}
                    />
                </Card>
            </div>
        </div>
    );
};
