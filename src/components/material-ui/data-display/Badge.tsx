import React from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Mail from '@mui/icons-material/Mail';
import Box from '@mui/material/Box';

const containerStyles = {
    mb: 4,
};

const sectionTitleStyles = {
    mb: 2,
};

const exampleRowStyles = {
    display: 'flex',
    justifyContent: 'space-evenly',
    mb: 2,
};

const LabelStyles = {
    mb: 1,
};

const BadgeContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
};

export const BadgeExample: React.FC = () => (
    <>
        <Box sx={containerStyles}>
            <Typography variant={'body1'} sx={sectionTitleStyles}>
                Standard (default)
            </Typography>
            <Box sx={exampleRowStyles}>
                <Box sx={BadgeContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Default
                    </Typography>
                    <Badge>
                        <Mail />
                    </Badge>
                </Box>
                <Box sx={BadgeContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Primary
                    </Typography>
                    <Badge color="primary" badgeContent={3}>
                        <Mail />
                    </Badge>
                </Box>
                <Box sx={BadgeContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Secondary
                    </Typography>
                    <Badge color="secondary" badgeContent={3}>
                        <Mail />
                    </Badge>
                </Box>
                <Box sx={BadgeContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Error
                    </Typography>
                    <Badge color="error" badgeContent={3}>
                        <Mail />
                    </Badge>
                </Box>
            </Box>
        </Box>
        <Box sx={containerStyles}>
            <Typography variant={'body1'} sx={sectionTitleStyles}>
                Dot
            </Typography>
            <Box sx={exampleRowStyles}>
                <Box sx={BadgeContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Default
                    </Typography>
                    <Badge variant={'dot'}>
                        <Mail />
                    </Badge>
                </Box>
                <Box sx={BadgeContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Primary
                    </Typography>
                    <Badge color="primary" badgeContent={3} variant={'dot'}>
                        <Mail />
                    </Badge>
                </Box>
                <Box sx={BadgeContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Secondary
                    </Typography>
                    <Badge color="secondary" badgeContent={3} variant={'dot'}>
                        <Mail />
                    </Badge>
                </Box>
                <Box sx={BadgeContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Error
                    </Typography>
                    <Badge color="error" badgeContent={3} variant={'dot'}>
                        <Mail />
                    </Badge>
                </Box>
            </Box>
        </Box>
        <Box sx={containerStyles}>
            <Typography variant={'body1'} sx={sectionTitleStyles}>
                w/ Badge Overlap
            </Typography>
            <Box sx={exampleRowStyles}>
                <Box sx={BadgeContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Rectangle (default)
                    </Typography>
                    <Badge badgeContent={1} color="primary">
                        <Avatar variant={'square'}>
                            <Mail />
                        </Avatar>
                    </Badge>
                </Box>
                <Box sx={BadgeContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Rectangle w/ Dot
                    </Typography>
                    <Badge badgeContent={1} variant={'dot'} color="primary">
                        <Avatar variant={'square'}>
                            <Mail />
                        </Avatar>
                    </Badge>
                </Box>
            </Box>
            <Box sx={exampleRowStyles}>
                <Box sx={BadgeContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Circle
                    </Typography>
                    <Badge badgeContent={1} overlap="circular" color="primary">
                        <Avatar>
                            <Mail />
                        </Avatar>
                    </Badge>
                </Box>
                <Box sx={BadgeContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Circle w/ Dot
                    </Typography>
                    <Badge badgeContent={1} overlap="circular" variant={'dot'} color="primary">
                        <Avatar>
                            <Mail />
                        </Avatar>
                    </Badge>
                </Box>
            </Box>
        </Box>
    </>
);
