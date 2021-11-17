import React from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Grid from '@material-ui/core/Grid';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { PxblueSmall } from '@brightlayer-ui/icons-mui';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';

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
        dividerContainer: {
            marginBottom: theme.spacing(2),
        },
        verticalDividerExample: {
            width: 'fit-content',
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: theme.shape.borderRadius,
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.secondary,
            '& svg': {
                margin: theme.spacing(1.5),
            },
            '& hr': {
                margin: theme.spacing(0, 0.5),
            },
            margin: '0 auto',
        },
    })
);

export const DividerExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Horizontal (default)
                </Typography>
                <div className={classes.dividerContainer}>
                    <List>
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar>
                                    <PxblueSmall />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Full Width Divider" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar>
                                    <PxblueSmall />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Light Full Width Divider" />
                        </ListItem>
                        <Divider light />
                    </List>
                    <List>
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar>
                                    <PxblueSmall />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Inset Divider" />
                        </ListItem>
                        <Divider variant={'inset'} />
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar>
                                    <PxblueSmall />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Light Inset Divider" />
                        </ListItem>
                        <Divider light variant={'inset'} />
                    </List>
                    <List>
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar>
                                    <PxblueSmall />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Middle Divider" />
                        </ListItem>
                        <Divider variant={'middle'} />
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar>
                                    <PxblueSmall />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Light Middle Divider" />
                        </ListItem>
                        <Divider light variant={'middle'} />
                    </List>
                </div>
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Vertical
                </Typography>
                <div className={classes.dividerContainer}>
                    <Grid container alignItems="center" className={classes.verticalDividerExample}>
                        <FormatAlignLeftIcon />
                        <FormatAlignCenterIcon />
                        <FormatAlignRightIcon />
                        <Divider orientation="vertical" flexItem />
                        <FormatBoldIcon />
                        <FormatItalicIcon />
                        <FormatUnderlinedIcon />
                    </Grid>
                </div>
            </div>
        </>
    );
};
