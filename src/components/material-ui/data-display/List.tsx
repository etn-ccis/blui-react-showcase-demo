import React from 'react';
import { useTheme, Theme, Typography, Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Folder } from '@material-ui/icons';

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
