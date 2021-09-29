import React from 'react';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Mail from '@material-ui/icons/Mail';

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
        badgeContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1,
        },
    })
);

export const BadgeExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Standard (default)
                </Typography>
                <div className={classes.exampleRow}>
                    <div className={classes.badgeContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Default
                        </Typography>
                        <Badge>
                            <Mail />
                        </Badge>
                    </div>
                    <div className={classes.badgeContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Primary
                        </Typography>
                        <Badge color="primary" badgeContent={3}>
                            <Mail />
                        </Badge>
                    </div>
                    <div className={classes.badgeContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Secondary
                        </Typography>
                        <Badge color="secondary" badgeContent={3}>
                            <Mail />
                        </Badge>
                    </div>
                    <div className={classes.badgeContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Error
                        </Typography>
                        <Badge color="error" badgeContent={3}>
                            <Mail />
                        </Badge>
                    </div>
                </div>
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Dot
                </Typography>
                <div className={classes.exampleRow}>
                    <div className={classes.badgeContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Default
                        </Typography>
                        <Badge variant={'dot'}>
                            <Mail />
                        </Badge>
                    </div>
                    <div className={classes.badgeContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Primary
                        </Typography>
                        <Badge color="primary" badgeContent={3} variant={'dot'}>
                            <Mail />
                        </Badge>
                    </div>
                    <div className={classes.badgeContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Secondary
                        </Typography>
                        <Badge color="secondary" badgeContent={3} variant={'dot'}>
                            <Mail />
                        </Badge>
                    </div>
                    <div className={classes.badgeContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Error
                        </Typography>
                        <Badge color="error" badgeContent={3} variant={'dot'}>
                            <Mail />
                        </Badge>
                    </div>
                </div>
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    w/ Badge Overlap
                </Typography>
                <div className={classes.exampleRow}>
                    <div className={classes.badgeContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Rectangle (default)
                        </Typography>
                        <Badge badgeContent={1} color="primary">
                            <Avatar variant={'square'}>
                                <Mail />
                            </Avatar>
                        </Badge>
                    </div>
                    <div className={classes.badgeContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Rectangle w/ Dot
                        </Typography>
                        <Badge badgeContent={1} variant={'dot'} color="primary">
                            <Avatar variant={'square'}>
                                <Mail />
                            </Avatar>
                        </Badge>
                    </div>
                </div>
                <div className={classes.exampleRow}>
                    <div className={classes.badgeContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Circle
                        </Typography>
                        <Badge badgeContent={1} overlap={'circle'} color="primary">
                            <Avatar>
                                <Mail />
                            </Avatar>
                        </Badge>
                    </div>
                    <div className={classes.badgeContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Circle w/ Dot
                        </Typography>
                        <Badge badgeContent={1} overlap={'circle'} variant={'dot'} color="primary">
                            <Avatar>
                                <Mail />
                            </Avatar>
                        </Badge>
                    </div>
                </div>
            </div>
        </>
    );
};
