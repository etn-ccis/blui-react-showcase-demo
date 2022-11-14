import React from 'react';
import * as Colors from '@brightlayer-ui/colors';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {
    Hero,
    HeroBanner,
    ChannelValue,
    EmptyState,
    InfoListItem,
    ScoreCard,
    DrawerNavGroup,
    ListItemTag,
} from '@brightlayer-ui/react-components';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import ListIcon from '@mui/icons-material/List';
import Settings from '@mui/icons-material/Settings';
import MoreVert from '@mui/icons-material/MoreVert';
import Timer from '@mui/icons-material/Timer';
import TrendingUp from '@mui/icons-material/TrendingUp';
import DevicesIcon from '@mui/icons-material/Devices';
import { Pie, Battery } from '@brightlayer-ui/react-progress-icons';
import { GradeA, Leaf, CurrentCircled, VoltageCircled, Temp, Moisture as Humidity } from '@brightlayer-ui/icons-mui';
import top from '../../assets/topology_40.png';
import { usePageTitle } from '../../hooks/usePageTitle';
import Box from '@mui/material/Box';

const scorecardStyles = {
    flex: '1 1 0px',
    width: '100%',
    maxWidth: '416px',
    minWidth: '350px',
};

const listTagStyles = {
    mr: 1,
};

export const Dashboard: React.FC = () => {
    const theme = useTheme();
    const rtl = theme.direction === 'rtl';
    const mdUp = useMediaQuery(theme.breakpoints.up('md'));
    usePageTitle('Dashboard');

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box
                sx={{
                    p: 2,
                    flex: 1,
                    width: '80%',
                    maxWidth: 1000,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <ScoreCard
                        headerColor={Colors.red[500]}
                        headerBackgroundImage={top}
                        headerTitle={'Substation 3'}
                        headerSubtitle={'High Humidity Alarm'}
                        headerInfo={'4 Devices'}
                        headerFontColor={Colors.white[50]}
                        actionItems={[<MoreVert key={'action1'} sx={rtl ? { transform: 'scaleX(-1)' } : {}} />]}
                        badge={
                            <HeroBanner sx={{ minWidth: 210 }}>
                                <Hero
                                    icon={<Temp fontSize={'inherit'} htmlColor={Colors.gray[500]} />}
                                    label={'Temperature'}
                                    iconSize={48}
                                    ChannelValueProps={{ value: 98, units: '°F' }}
                                />
                                <Hero
                                    icon={<Humidity fontSize={'inherit'} htmlColor={Colors.blue[300]} />}
                                    label={'Humidity'}
                                    ChannelValueProps={{ value: 54, units: '%' }}
                                    iconSize={48}
                                />
                            </HeroBanner>
                        }
                        badgeOffset={0}
                        actionRow={<InfoListItem dense chevron title={'More'} hidePadding />}
                        sx={{ ...scorecardStyles, mr: mdUp ? 2 : 0, mb: 2 }}
                    >
                        <List sx={{ p: '16px 0' }}>
                            <InfoListItem
                                dense
                                sx={{ height: 36 }}
                                fontColor={Colors.red[500]}
                                iconColor={Colors.red[500]}
                                title={'1 Alarm'}
                                icon={<Leaf color={'inherit'} />}
                            />
                            <InfoListItem
                                dense
                                sx={{ height: 36 }}
                                fontColor={Colors.blue[500]}
                                iconColor={Colors.blue[500]}
                                title={'1 Event'}
                                icon={<Leaf color={'inherit'} />}
                            />
                            <InfoListItem
                                dense
                                sx={{ height: 36 }}
                                title={'Online'}
                                icon={<Leaf color={'inherit'} />}
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
                        actionItems={[<MoreVert key={'action1'} />]}
                        badge={
                            <HeroBanner>
                                <Hero
                                    icon={<GradeA fontSize={'inherit'} htmlColor={Colors.green[500]} />}
                                    iconBackgroundColor={theme.palette.background.paper}
                                    label={'Health'}
                                    iconSize={72}
                                    ChannelValueProps={{ value: 98, units: '%' }}
                                />
                            </HeroBanner>
                        }
                        badgeOffset={-52}
                        actionRow={<InfoListItem dense chevron title={'View Location'} hidePadding />}
                        sx={{ ...scorecardStyles, mb: 2 }}
                    >
                        <List sx={{ p: '16px 0' }}>
                            <InfoListItem
                                dense
                                sx={{ height: 36 }}
                                title={'0 Alarms'}
                                icon={<Leaf color={'inherit'} />}
                            />
                            <InfoListItem
                                dense
                                sx={{ height: 36 }}
                                fontColor={Colors.blue[500]}
                                iconColor={Colors.blue[500]}
                                title={'1 Event'}
                                icon={<Leaf color={'inherit'} />}
                            />
                            <InfoListItem
                                dense
                                sx={{ height: 36 }}
                                title={'Online'}
                                icon={<Leaf color={'inherit'} />}
                            />
                        </List>
                    </ScoreCard>
                </Box>

                <Card sx={{ maxWidth: `${416 * 2 + 16}px` }}>
                    <List sx={{ p: 0 }}>
                        <HeroBanner divider>
                            <Hero
                                icon={<GradeA fontSize={'inherit'} color={'inherit'} htmlColor={Colors.green[500]} />}
                                label={'Healthy'}
                                ChannelValueProps={{ value: 96, units: '/100' }}
                            />
                            <Hero
                                icon={
                                    <Pie
                                        color={Colors.blue[500]}
                                        percent={65}
                                        size={36}
                                        // @ts-ignore until we publish the updated type definitions
                                    />
                                }
                                label={'Load'}
                            >
                                <ChannelValue
                                    value={65}
                                    units={'%'}
                                    fontSize={20}
                                    icon={
                                        <TrendingUp
                                            htmlColor={Colors.red[500]}
                                            fontSize={'inherit'}
                                            sx={rtl ? { transform: 'scaleX(-1)' } : {}}
                                        />
                                    }
                                />
                            </Hero>
                            <Hero icon={<Timer fontSize={'inherit'} color={'inherit'} />} label={'Estimated'}>
                                <ChannelValue value={1} units={'h'} fontSize={20} />
                                <ChannelValue value={26} units={'m'} fontSize={20} />
                            </Hero>
                            <Hero
                                icon={
                                    <Battery
                                        color={Colors.blue[500]}
                                        percent={100}
                                        size={36}
                                        // @ts-ignore until we publish the updated type definitions
                                        sx={rtl ? { transform: 'scaleX(-1)' } : {}}
                                    />
                                }
                                label={'Battery'}
                            >
                                <ChannelValue value={'Full'} fontSize={20} />
                            </Hero>
                        </HeroBanner>
                        <InfoListItem
                            dense
                            title={'Status'}
                            divider={'full'}
                            statusColor={Colors.green[500]}
                            subtitleSeparator={'/'}
                            icon={<Leaf color={'inherit'} />}
                            iconAlign={'center'}
                            rightComponent={<ChannelValue fontSize={16} value={'Online, ESS+'} />}
                        />
                        <InfoListItem
                            title={'Input Voltage'}
                            divider={'full'}
                            avatar
                            subtitle={['Phase A', 'Phase B', 'Phase C']}
                            icon={<VoltageCircled />}
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
                            icon={<VoltageCircled color={'inherit'} />}
                            rightComponent={
                                <Box sx={{ display: 'flex', alignItems: 'center', color: Colors.red[500] }}>
                                    <ListItemTag label={'monitored'} sx={listTagStyles} />
                                    <ChannelValue fontSize={16} value={480} units={'V'} />,{' '}
                                    <ChannelValue fontSize={16} value={480} units={'V'} />,{' '}
                                    <ChannelValue fontSize={16} value={480} units={'V'} />
                                </Box>
                            }
                        />
                        <InfoListItem
                            dense
                            title={'Output Current'}
                            divider={'full'}
                            icon={<CurrentCircled color={'inherit'} />}
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
                            icon={<Temp />}
                            iconAlign={'center'}
                            rightComponent={
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <ListItemTag
                                        backgroundColor={theme.palette.background.default}
                                        label={'active'}
                                        fontColor={
                                            theme.palette.mode === 'light' ? Colors.blue[700] : Colors.green['500']
                                        }
                                        sx={listTagStyles}
                                    />
                                    <ListItemTag
                                        label={'OVERHEAT'}
                                        backgroundColor={Colors.red['500']}
                                        sx={listTagStyles}
                                    />
                                    <ChannelValue
                                        fontSize={16}
                                        icon={
                                            <TrendingUp
                                                htmlColor={Colors.red[500]}
                                                sx={rtl ? { transform: 'scaleX(-1)' } : {}}
                                            />
                                        }
                                        value={68}
                                        units={'°F'}
                                    />
                                </Box>
                            }
                        />
                    </List>
                </Card>
                <Card
                    sx={{
                        mt: 2,
                        p: 3,
                        maxWidth: `${416 * 2 + 16}px`,
                    }}
                >
                    <EmptyState
                        icon={<DevicesIcon fontSize={'inherit'} />}
                        title={'No Devices'}
                        description={'Contact your local admin for details'}
                        actions={
                            <Button variant="contained" color="primary" startIcon={<Add />}>
                                Add Device
                            </Button>
                        }
                    />
                </Card>
                <Card sx={{ mt: 2, maxWidth: `${416 * 2 + 16}px` }}>
                    <DrawerNavGroup
                        title={'Resources'}
                        items={[
                            {
                                title: 'Guides',
                                itemID: 'Guides',
                                icon: <DevicesIcon />,
                                rightComponent: <ListItemTag label={'new'} />,
                                expandIcon: <Add />,
                                collapseIcon: <Remove />,
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
                                icon: <Settings />,
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
                                icon: <ListIcon sx={rtl ? { transform: 'scaleX(-1)' } : {}} />,
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
            </Box>
        </Box>
    );
};
