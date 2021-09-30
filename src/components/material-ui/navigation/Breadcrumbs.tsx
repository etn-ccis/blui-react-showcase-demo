import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Home from '@material-ui/icons/Home';
import NavigateNext from '@material-ui/icons/NavigateNext';
import Whatshot from '@material-ui/icons/Whatshot';

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
