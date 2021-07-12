import { Breadcrumbs, createStyles, Link, makeStyles, Theme, Typography, useTheme } from '@material-ui/core';
import { Home, NavigateNext, Whatshot } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginBottom: theme.spacing(4),
        },
        sectionTitle: {
            marginBottom: theme.spacing(2),
        },
        icon: {
            marginRight: theme.spacing(0.5),
            width: 20,
            height: 20,
            top: 4,
            position: 'relative',
        },
    })
);

const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.info('You clicked a breadcrumb.');
};

export const BreadcrumbsExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Default
                </Typography>
                <Breadcrumbs>
                    <Link color="inherit" href="/" onClick={handleClick}>
                        Material-UI
                    </Link>
                    <Link color="inherit" href="/" onClick={handleClick}>
                        Core
                    </Link>
                    <Typography color="textPrimary">Breadcrumb</Typography>
                </Breadcrumbs>
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Custom Separator
                </Typography>
                <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
                    <Link color="inherit" href="/" onClick={handleClick}>
                        Material-UI
                    </Link>
                    <Link color="inherit" href="/" onClick={handleClick}>
                        Core
                    </Link>
                    <Typography color="textPrimary">Breadcrumb</Typography>
                </Breadcrumbs>
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    With Icons
                </Typography>
                <Breadcrumbs>
                    <Link color="inherit" href="/" onClick={handleClick}>
                        <Home className={classes.icon} />
                        Material-UI
                    </Link>
                    <Link color="inherit" href="/" onClick={handleClick}>
                        <Whatshot className={classes.icon} />
                        Core
                    </Link>
                    <Typography color="textPrimary">Breadcrumb</Typography>
                </Breadcrumbs>
            </div>
        </>
    );
};
