import React from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import EventIcon from '@material-ui/icons/Event';
import { EmptyState } from '@pxblue/react-components';
import { createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: `calc(100vh - ${theme.spacing(8)}px)`,
            [theme.breakpoints.down('xs')]: {
                height: `calc(100vh - ${theme.spacing(7)}px)`,
            },
        },
    })
);

export const Settings: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.container}>
            <EmptyState icon={<EventIcon style={{ fontSize: 'inherit' }} />} title={'Coming Soon!'} />
        </div>
    );
};
