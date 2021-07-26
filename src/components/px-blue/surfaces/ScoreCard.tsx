import React from 'react';
import { useTheme, Theme, List, ListItem, ListItemText } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Hero, HeroBanner, InfoListItem, ScoreCard } from '@pxblue/react-components';
import * as colors from '@pxblue/colors';
import backgroundImage from '../../../assets/topology_40.png';
import { Cloud, ListAlt, Mail, MoreVert, Notifications, Search } from '@material-ui/icons';
import { GradeA, Moisture as Humidity, Temp } from '@pxblue/icons-mui';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../__types__';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        exampleContainer: {
            marginBottom: theme.spacing(2),
        },
        scoreCard: {
            width: '100%',
            flex: '0 0 auto',
        },
        title: {
            fontWeight: 400,
        },
        iconFlip: {
            transform: 'scaleX(-1)',
        },
    })
);

export const ScoreCardExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
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
            iconBackgroundColor={colors.white[50]}
            value={98}
            units={'°F'}
            fontSize={'normal'}
        />,
        <Hero
            key={'hero2'}
            icon={<Humidity fontSize={'inherit'} htmlColor={colors.blue[300]} />}
            label={'Humidity'}
            value={54}
            iconBackgroundColor={colors.white[50]}
            units={'%'}
            iconSize={48}
            fontSize={'normal'}
        />,
    ];

    return (
        <>
            <div className={classes.exampleContainer}>
                <ScoreCard className={classes.scoreCard} headerTitle={'Basic Usage'}>
                    <List>
                        <ListItem>
                            <ListItemText primary={'Body Content'} />
                        </ListItem>
                    </List>
                </ScoreCard>
            </div>

            <div className={classes.exampleContainer}>
                <ScoreCard
                    className={classes.scoreCard}
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
            </div>

            <div className={classes.exampleContainer}>
                <ScoreCard
                    className={classes.scoreCard}
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
            </div>

            <div className={classes.exampleContainer}>
                <ScoreCard
                    className={classes.scoreCard}
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
            </div>

            <ScoreCard
                className={classes.scoreCard}
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
                            value={'98'}
                            units={'/100'}
                            fontSize={'normal'}
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
                        classes={{ title: classes.title }}
                    />
                    <InfoListItem
                        dense
                        style={{ height: '2.25rem' }}
                        fontColor={isDarkMode ? colors.blue[300] : colors.blue[500]}
                        iconColor={isDarkMode ? colors.blue[300] : colors.blue[500]}
                        title={'1 Event'}
                        icon={<ListAlt color={'inherit'} className={clsx({ [classes.iconFlip]: rtl })} />}
                    />
                    <InfoListItem
                        dense
                        style={{ height: '2.25rem' }}
                        title={'Online'}
                        icon={<Cloud color={'inherit'} />}
                        classes={{ title: classes.title }}
                    />
                </List>
            </ScoreCard>
        </>
    );
};
