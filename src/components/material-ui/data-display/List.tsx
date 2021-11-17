import React from 'react';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Folder from '@material-ui/icons/Folder';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginBottom: theme.spacing(4),
        },
        sectionTitle: {
            marginBottom: theme.spacing(2),
        },
    })
);

const generate = (element: React.ReactElement): React.ReactElement[] =>
    [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        })
    );

export const ListExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Default
                </Typography>

                <List>
                    {generate(
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <Folder />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Single-line item" secondary={'Secondary text'} />
                        </ListItem>
                    )}
                </List>
            </div>

            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Dense
                </Typography>

                <List>
                    {generate(
                        <ListItem dense>
                            <ListItemAvatar>
                                <Avatar>
                                    <Folder />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Single-line item" secondary={'Secondary text'} />
                        </ListItem>
                    )}
                </List>
            </div>
        </>
    );
};
