import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Home from '@mui/icons-material/Home';
import NavigateNext from '@mui/icons-material/NavigateNext';
import Whatshot from '@mui/icons-material/Whatshot';

import React from 'react';
import Box from '@mui/material/Box';

const containerStyles = {
    mb: 4,
};

const sectionTitleStyles = {
    mb: 2,
};

const iconStyles = {
    mr: 0.5,
    width: 20,
    height: 20,
    top: 4,
    position: 'relative',
};

const handleClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.info('You clicked a breadcrumb.');
};

export const BreadcrumbsExample: React.FC = () => (
    <>
        <Box sx={containerStyles}>
            <Typography variant={'body1'} sx={sectionTitleStyles}>
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
        </Box>
        <Box sx={containerStyles}>
            <Typography variant={'body1'} sx={sectionTitleStyles}>
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
        </Box>
        <Box sx={containerStyles}>
            <Typography variant={'body1'} sx={sectionTitleStyles}>
                With Icons
            </Typography>
            <Breadcrumbs>
                <Link color="inherit" href="/" onClick={handleClick}>
                    <Home sx={iconStyles} />
                    Material-UI
                </Link>
                <Link color="inherit" href="/" onClick={handleClick}>
                    <Whatshot sx={iconStyles} />
                    Core
                </Link>
                <Typography color="textPrimary">Breadcrumb</Typography>
            </Breadcrumbs>
        </Box>
    </>
);
