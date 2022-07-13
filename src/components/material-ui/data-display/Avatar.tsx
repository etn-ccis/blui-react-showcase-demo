import React from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { PxblueSmall } from '@brightlayer-ui/icons-mui';
import BettyWhite from '../../../assets/betty_white.jpeg';
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
    mb: 2,
};

const LabelStyles = {
    mb: 1,
};

const AvatarContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
};

export const AvatarExample: React.FC = () => (
    <>
        <Box sx={ContainerStyles}>
            <Typography variant={'body1'} sx={SectionTitleStyles}>
                Circular (default)
            </Typography>
            <Box sx={ExampleRowStyles}>
                <Box sx={AvatarContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Letter
                    </Typography>
                    <Avatar>UI</Avatar>
                </Box>
                <Box sx={AvatarContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Icon
                    </Typography>
                    <Avatar>
                        <PxblueSmall />
                    </Avatar>
                </Box>
                <Box sx={AvatarContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Image
                    </Typography>
                    <Avatar src={BettyWhite} />
                </Box>
            </Box>
        </Box>
        <Box sx={ContainerStyles}>
            <Typography variant={'body1'} sx={SectionTitleStyles}>
                Rounded
            </Typography>
            <Box sx={ExampleRowStyles}>
                <Box sx={AvatarContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Letter
                    </Typography>
                    <Avatar variant={'rounded'}>UI</Avatar>
                </Box>
                <Box sx={AvatarContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Icon
                    </Typography>
                    <Avatar variant={'rounded'}>
                        <PxblueSmall />
                    </Avatar>
                </Box>
                <Box sx={AvatarContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Image
                    </Typography>
                    <Avatar src={BettyWhite} variant={'rounded'} />
                </Box>
            </Box>
        </Box>
        <Box sx={ContainerStyles}>
            <Typography variant={'body1'} sx={SectionTitleStyles}>
                Square
            </Typography>
            <Box sx={ExampleRowStyles}>
                <Box sx={AvatarContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Letter
                    </Typography>
                    <Avatar variant={'square'}>UI</Avatar>
                </Box>
                <Box sx={AvatarContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Icon
                    </Typography>
                    <Avatar variant={'square'}>
                        <PxblueSmall />
                    </Avatar>
                </Box>
                <Box sx={AvatarContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Image
                    </Typography>
                    <Avatar src={BettyWhite} variant={'square'} />
                </Box>
            </Box>
        </Box>
    </>
);
