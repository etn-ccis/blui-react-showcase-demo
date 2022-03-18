import React from 'react';
import Typography from '@mui/material/Typography';
import { useTheme, Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Cancel from '@mui/icons-material/Cancel';
import CancelOutlined from '@mui/icons-material/CancelOutlined';
import CancelRounded from '@mui/icons-material/CancelRounded';
import CancelSharp from '@mui/icons-material/CancelSharp';
import CancelTwoTone from '@mui/icons-material/CancelTwoTone';
import Delete from '@mui/icons-material/Delete';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import DeleteRounded from '@mui/icons-material/DeleteRounded';
import DeleteSharp from '@mui/icons-material/DeleteSharp';
import DeleteTwoTone from '@mui/icons-material/DeleteTwoTone';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteOutlined from '@mui/icons-material/FavoriteOutlined';
import FavoriteRounded from '@mui/icons-material/FavoriteRounded';
import FavoriteSharp from '@mui/icons-material/FavoriteSharp';
import FavoriteTwoTone from '@mui/icons-material/FavoriteTwoTone';
import Mail from '@mui/icons-material/Mail';
import MailOutlined from '@mui/icons-material/MailOutlined';
import MailRounded from '@mui/icons-material/MailRounded';
import MailSharp from '@mui/icons-material/MailSharp';
import MailTwoTone from '@mui/icons-material/MailTwoTone';

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
