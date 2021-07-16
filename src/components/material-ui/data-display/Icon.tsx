import React from 'react';
import { useTheme, Theme, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import {
    Cancel,
    CancelOutlined,
    CancelRounded,
    CancelSharp,
    CancelTwoTone,
    Delete,
    DeleteOutlined,
    DeleteRounded,
    DeleteSharp,
    DeleteTwoTone,
    Favorite,
    FavoriteOutlined,
    FavoriteRounded,
    FavoriteSharp,
    FavoriteTwoTone,
    Mail,
    MailOutlined,
    MailRounded,
    MailSharp,
    MailTwoTone,
} from '@material-ui/icons';

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
        iconContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1,
        },
    })
);

export const IconExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Mail
                </Typography>
                <div className={classes.exampleRow}>
                    <div className={classes.iconContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Filled
                        </Typography>
                        <Mail />
                    </div>
                    <div className={classes.iconContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Outlined
                        </Typography>
                        <MailOutlined />
                    </div>
                    <div className={classes.iconContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Rounded
                        </Typography>
                        <MailRounded />
                    </div>
                    <div className={classes.iconContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Two-tone
                        </Typography>
                        <MailTwoTone />
                    </div>
                    <div className={classes.iconContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Sharp
                        </Typography>
                        <MailSharp />
                    </div>
                </div>
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Favorite
                </Typography>
                <div className={classes.exampleRow}>
                    <div className={classes.iconContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Filled
                        </Typography>
                        <Favorite />
                    </div>
                    <div className={classes.iconContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Outlined
                        </Typography>
                        <FavoriteOutlined />
                    </div>
                    <div className={classes.iconContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Rounded
                        </Typography>
                        <FavoriteRounded />
                    </div>
                    <div className={classes.iconContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Two-tone
                        </Typography>
                        <FavoriteTwoTone />
                    </div>
                    <div className={classes.iconContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Sharp
                        </Typography>
                        <FavoriteSharp />
                    </div>
                </div>
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Delete
                </Typography>
                <div className={classes.exampleRow}>
                    <div className={classes.iconContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Filled
                        </Typography>
                        <Delete />
                    </div>
                    <div className={classes.iconContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Outlined
                        </Typography>
                        <DeleteOutlined />
                    </div>
                    <div className={classes.iconContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Rounded
                        </Typography>
                        <DeleteRounded />
                    </div>
                    <div className={classes.iconContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Two-tone
                        </Typography>
                        <DeleteTwoTone />
                    </div>
                    <div className={classes.iconContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Sharp
                        </Typography>
                        <DeleteSharp />
                    </div>
                </div>
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Cancel
                </Typography>
                <div className={classes.exampleRow}>
                    <div className={classes.iconContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Filled
                        </Typography>
                        <Cancel />
                    </div>
                    <div className={classes.iconContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Outlined
                        </Typography>
                        <CancelOutlined />
                    </div>
                    <div className={classes.iconContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Rounded
                        </Typography>
                        <CancelRounded />
                    </div>
                    <div className={classes.iconContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Two-tone
                        </Typography>
                        <CancelTwoTone />
                    </div>
                    <div className={classes.iconContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Sharp
                        </Typography>
                        <CancelSharp />
                    </div>
                </div>
            </div>
        </>
    );
};
