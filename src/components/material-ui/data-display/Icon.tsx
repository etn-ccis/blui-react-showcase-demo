import React from 'react';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Cancel from '@material-ui/icons/Cancel';
import CancelOutlined from '@material-ui/icons/CancelOutlined';
import CancelRounded from '@material-ui/icons/CancelRounded';
import CancelSharp from '@material-ui/icons/CancelSharp';
import CancelTwoTone from '@material-ui/icons/CancelTwoTone';
import Delete from '@material-ui/icons/Delete';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import DeleteRounded from '@material-ui/icons/DeleteRounded';
import DeleteSharp from '@material-ui/icons/DeleteSharp';
import DeleteTwoTone from '@material-ui/icons/DeleteTwoTone';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteOutlined from '@material-ui/icons/FavoriteOutlined';
import FavoriteRounded from '@material-ui/icons/FavoriteRounded';
import FavoriteSharp from '@material-ui/icons/FavoriteSharp';
import FavoriteTwoTone from '@material-ui/icons/FavoriteTwoTone';
import Mail from '@material-ui/icons/Mail';
import MailOutlined from '@material-ui/icons/MailOutlined';
import MailRounded from '@material-ui/icons/MailRounded';
import MailSharp from '@material-ui/icons/MailSharp';
import MailTwoTone from '@material-ui/icons/MailTwoTone';

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
