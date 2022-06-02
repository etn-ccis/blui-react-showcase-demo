import React from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Mail from '@mui/icons-material/Mail';
import Box from '@mui/material/Box';

const ContainerStyles = {
    mb: 4,
};

const SectionTitleStyles = {
    mb: 2,
};

const ExampleRowStyles = {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginBottom: 2,
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
        <Box sx={ContainerStyles}>
            <Typography variant={'body1'} sx={SectionTitleStyles}>
                Standard (default)
            </Typography>
            <Box sx={ExampleRowStyles}>
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
        <Box sx={ContainerStyles}>
            <Typography variant={'body1'} sx={SectionTitleStyles}>
                Dot
            </Typography>
            <Box sx={ExampleRowStyles}>
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
        <Box sx={ContainerStyles}>
            <Typography variant={'body1'} sx={SectionTitleStyles}>
                w/ Badge Overlap
            </Typography>
            <Box sx={ExampleRowStyles}>
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
            <Box sx={ExampleRowStyles}>
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
