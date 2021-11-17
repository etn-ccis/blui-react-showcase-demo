import React from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import useTheme from '@material-ui/core/styles/useTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { PxblueSmall } from '@brightlayer-ui/icons-mui';
import BettyWhite from '../../../assets/betty_white.jpeg';

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
        avatarContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1,
        },
    })
);

export const AvatarExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Circular (default)
                </Typography>
                <div className={classes.exampleRow}>
                    <div className={classes.avatarContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Letter
                        </Typography>
                        <Avatar>UI</Avatar>
                    </div>
                    <div className={classes.avatarContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Icon
                        </Typography>
                        <Avatar>
                            <PxblueSmall />
                        </Avatar>
                    </div>
                    <div className={classes.avatarContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Image
                        </Typography>
                        <Avatar src={BettyWhite} />
                    </div>
                </div>
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Rounded
                </Typography>
                <div className={classes.exampleRow}>
                    <div className={classes.avatarContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Letter
                        </Typography>
                        <Avatar variant={'rounded'}>UI</Avatar>
                    </div>
                    <div className={classes.avatarContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Icon
                        </Typography>
                        <Avatar variant={'rounded'}>
                            <PxblueSmall />
                        </Avatar>
                    </div>
                    <div className={classes.avatarContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Image
                        </Typography>
                        <Avatar src={BettyWhite} variant={'rounded'} />
                    </div>
                </div>
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Square
                </Typography>
                <div className={classes.exampleRow}>
                    <div className={classes.avatarContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Letter
                        </Typography>
                        <Avatar variant={'square'}>UI</Avatar>
                    </div>
                    <div className={classes.avatarContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Icon
                        </Typography>
                        <Avatar variant={'square'}>
                            <PxblueSmall />
                        </Avatar>
                    </div>
                    <div className={classes.avatarContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Image
                        </Typography>
                        <Avatar src={BettyWhite} variant={'square'} />
                    </div>
                </div>
            </div>
        </>
    );
};
