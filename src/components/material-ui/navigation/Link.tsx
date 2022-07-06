import React from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const linkStyles = {
    mb: 2,
};

const handleClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.info('You clicked a link.');
};

export const LinkExample: React.FC = () => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        <Link onClick={handleClick} href="/" sx={linkStyles}>
            Default
        </Link>
        <Link onClick={handleClick} href="/" color={'primary'} sx={linkStyles}>
            Primary
        </Link>
        <Link onClick={handleClick} href="/" color={'secondary'} sx={linkStyles}>
            Secondary
        </Link>
        <Link onClick={handleClick} href="/" color={'textPrimary'} sx={linkStyles}>
            Text Primary
        </Link>
        <Link onClick={handleClick} href="/" color={'textSecondary'} sx={linkStyles}>
            Text Secondary
        </Link>
    </Box>
);
