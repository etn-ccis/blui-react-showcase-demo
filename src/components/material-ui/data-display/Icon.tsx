import React from 'react';
import Typography from '@mui/material/Typography';
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

const IconContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
};

export const IconExample: React.FC = () => (
    <>
        <Box sx={ContainerStyles}>
            <Typography variant={'body1'} sx={SectionTitleStyles}>
                Mail
            </Typography>
            <Box sx={ExampleRowStyles}>
                <Box sx={IconContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Filled
                    </Typography>
                    <Mail />
                </Box>
                <Box sx={IconContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Outlined
                    </Typography>
                    <MailOutlined />
                </Box>
                <Box sx={IconContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Rounded
                    </Typography>
                    <MailRounded />
                </Box>
                <Box sx={IconContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Two-tone
                    </Typography>
                    <MailTwoTone />
                </Box>
                <Box sx={IconContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Sharp
                    </Typography>
                    <MailSharp />
                </Box>
            </Box>
        </Box>
        <Box sx={ContainerStyles}>
            <Typography variant={'body1'} sx={SectionTitleStyles}>
                Favorite
            </Typography>
            <Box sx={ExampleRowStyles}>
                <Box sx={IconContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Filled
                    </Typography>
                    <Favorite />
                </Box>
                <Box sx={IconContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Outlined
                    </Typography>
                    <FavoriteOutlined />
                </Box>
                <Box sx={IconContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Rounded
                    </Typography>
                    <FavoriteRounded />
                </Box>
                <Box sx={IconContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Two-tone
                    </Typography>
                    <FavoriteTwoTone />
                </Box>
                <Box sx={IconContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Sharp
                    </Typography>
                    <FavoriteSharp />
                </Box>
            </Box>
        </Box>
        <Box sx={ContainerStyles}>
            <Typography variant={'body1'} sx={SectionTitleStyles}>
                Delete
            </Typography>
            <Box sx={ExampleRowStyles}>
                <Box sx={IconContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Filled
                    </Typography>
                    <Delete />
                </Box>
                <Box sx={IconContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Outlined
                    </Typography>
                    <DeleteOutlined />
                </Box>
                <Box sx={IconContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Rounded
                    </Typography>
                    <DeleteRounded />
                </Box>
                <Box sx={IconContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Two-tone
                    </Typography>
                    <DeleteTwoTone />
                </Box>
                <Box sx={IconContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Sharp
                    </Typography>
                    <DeleteSharp />
                </Box>
            </Box>
        </Box>
        <Box sx={ContainerStyles}>
            <Typography variant={'body1'} sx={SectionTitleStyles}>
                Cancel
            </Typography>
            <Box sx={ExampleRowStyles}>
                <Box sx={IconContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Filled
                    </Typography>
                    <Cancel />
                </Box>
                <Box sx={IconContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Outlined
                    </Typography>
                    <CancelOutlined />
                </Box>
                <Box sx={IconContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Rounded
                    </Typography>
                    <CancelRounded />
                </Box>
                <Box sx={IconContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Two-tone
                    </Typography>
                    <CancelTwoTone />
                </Box>
                <Box sx={IconContainerStyles}>
                    <Typography variant={'body2'} sx={LabelStyles}>
                        Sharp
                    </Typography>
                    <CancelSharp />
                </Box>
            </Box>
        </Box>
    </>
);
