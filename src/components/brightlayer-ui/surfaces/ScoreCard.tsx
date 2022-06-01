import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Hero, HeroBanner, InfoListItem, ScoreCard } from '@brightlayer-ui/react-components';
import * as colors from '@brightlayer-ui/colors';
import backgroundImage from '../../../assets/topology_40.png';
import Cloud from '@mui/icons-material/Cloud';
import ListAlt from '@mui/icons-material/ListAlt';
import Mail from '@mui/icons-material/Mail';
import MoreVert from '@mui/icons-material/MoreVert';
import Notifications from '@mui/icons-material/Notifications';
import Search from '@mui/icons-material/Search';
import { GradeA, Moisture as Humidity, Temp } from '@brightlayer-ui/icons-mui';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../__types__';
import Box from '@mui/material/Box';

const ExampleContainerStyles = {
    marginBottom: 2,
};

const ScoreCardStyles = {
    width: '100%',
    flex: '0 0 auto',
};

export const ScoreCardExample: React.FC = () => {
    const isDarkMode = useSelector((store: AppStore) => store.app.theme) === 'light' ? false : true;
    const direction = useSelector((store: AppStore) => store.app.direction);
    const rtl = direction === 'rtl';

    const actionRow = (
        <List style={{ padding: 0 }}>
            <InfoListItem dense chevron title={'View Location'} hidePadding onClick={(): void => {}} />
        </List>
    );

    const actionItems = [
        <Search onClick={(): void => {}} key={'search'} />,
        <Mail onClick={(): void => {}} key={'mail'} />,
        <Notifications onClick={(): void => {}} key={'notifications'} />,
    ];

    const heroes: JSX.Element[] = [
        <Hero
            key={'hero1'}
            icon={<Temp fontSize={'inherit'} htmlColor={colors.black[500]} />}
            label={'Temperature'}
            iconSize={48}
            ChannelValueProps={{ value: 98, units: '°F', fontSize: 'normal' }}
        />,
        <Hero
            key={'hero2'}
            icon={<Humidity fontSize={'inherit'} htmlColor={colors.blue[300]} />}
            label={'Humidity'}
            ChannelValueProps={{ value: 54, units: '%', fontSize: 'normal' }}
            iconSize={48}
        />,
    ];

    return (
        <>
            <Box sx={ExampleContainerStyles}>
                <ScoreCard sx={ScoreCardStyles} headerTitle={'Basic Usage'}>
                    <List>
                        <ListItem>
                            <ListItemText primary={'Body Content'} />
                        </ListItem>
                    </List>
                </ScoreCard>
            </Box>

            <Box sx={ExampleContainerStyles}>
                <ScoreCard
                    sx={ScoreCardStyles}
                    headerTitle={'Custom Header'}
                    headerSubtitle={'Subtitle'}
                    headerInfo={'4 Devices'}
                    headerColor={colors.blue[500]}
                    headerFontColor={colors.white[50]}
                    headerBackgroundImage={backgroundImage}
                >
                    <List>
                        <ListItem>
                            <ListItemText primary={'Body Content'} />
                        </ListItem>
                    </List>
                </ScoreCard>
            </Box>

            <Box sx={ExampleContainerStyles}>
                <ScoreCard
                    sx={ScoreCardStyles}
                    headerTitle={'w/ Actions'}
                    headerSubtitle={'High Humidity Alarm'}
                    headerInfo={'4 Devices'}
                    headerColor={colors.blue[500]}
                    headerFontColor={colors.white[50]}
                    headerBackgroundImage={backgroundImage}
                    actionItems={actionItems}
                    actionRow={actionRow}
                >
                    <List>
                        <ListItem>
                            <ListItemText primary={'Body Content'} />
                        </ListItem>
                    </List>
                </ScoreCard>
            </Box>

            <Box sx={ExampleContainerStyles}>
                <ScoreCard
                    sx={ScoreCardStyles}
                    headerTitle={'Substation 3'}
                    headerSubtitle={'High Humidity Alarm'}
                    headerInfo={'4 Devices'}
                    headerColor={colors.blue[500]}
                    headerFontColor={colors.white[50]}
                    headerBackgroundImage={backgroundImage}
                    actionItems={[<MoreVert onClick={(): void => {}} key={'morevert'} />]}
                    actionRow={actionRow}
                    badge={<HeroBanner>{heroes}</HeroBanner>}
                    badgeOffset={0}
                >
                    <List>
                        <ListItem>
                            <ListItemText primary={'Body Content'} />
                        </ListItem>
                    </List>
                </ScoreCard>
            </Box>

            <ScoreCard
                sx={ScoreCardStyles}
                headerTitle={'Substation 3'}
                headerSubtitle={'Normal'}
                headerInfo={'4 Devices'}
                headerFontColor={colors.white[50]}
                headerBackgroundImage={backgroundImage}
                actionItems={[<MoreVert onClick={(): void => {}} key={'morevert'} />]}
                actionRow={actionRow}
                badge={
                    <HeroBanner>
                        <Hero
                            icon={<GradeA fontSize={'inherit'} htmlColor={colors.green[500]} />}
                            label={'Grade'}
                            iconSize={72}
                            iconBackgroundColor={isDarkMode ? colors.black[900] : colors.white[50]}
                            ChannelValueProps={{ value: 98, units: '/100', fontSize: 'normal' }}
                        />
                    </HeroBanner>
                }
                badgeOffset={-52}
            >
                <List style={{ padding: '.5rem 0' }}>
                    <InfoListItem
                        dense
                        style={{ height: '2.25rem' }}
                        title={'0 Alarms'}
                        icon={<Notifications color={'inherit'} />}
                        sx={{
                            '& .BluiInfoListItem-title': {
                                fontWeight: 400,
                            },
                        }}
                    />
                    <InfoListItem
                        dense
                        style={{ height: '2.25rem' }}
                        fontColor={isDarkMode ? colors.blue[300] : colors.blue[500]}
                        iconColor={isDarkMode ? colors.blue[300] : colors.blue[500]}
                        title={'1 Event'}
                        icon={<ListAlt color={'inherit'} sx={rtl ? { transform: 'scaleX(-1)' } : {}} />}
                    />
                    <InfoListItem
                        dense
                        style={{ height: '2.25rem' }}
                        title={'Online'}
                        icon={<Cloud color={'inherit'} />}
                        sx={{
                            '& .BluiInfoListItem-title': {
                                fontWeight: 400,
                            },
                        }}
                    />
                </List>
            </ScoreCard>
        </>
    );
};
