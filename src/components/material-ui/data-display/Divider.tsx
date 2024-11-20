import React from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Grid from '@mui/material/Grid';
import { PxblueSmall } from '@brightlayer-ui/icons-mui';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';

const ContainerStyles = {
    mb: 4,
};

const SectionTitleStyles = {
    mb: 2,
};

const DividerContainerStyles = {
    mb: 2,
};

export const DividerExample: React.FC = () => {
    const theme = useTheme();

    return (
        <>
            <Box sx={ContainerStyles}>
                <Typography variant={'body1'} sx={SectionTitleStyles}>
                    Horizontal (default)
                </Typography>
                <Box sx={DividerContainerStyles}>
                    <List>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar>
                                    <PxblueSmall />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Full Width Divider" />
                        </ListItemButton>
                        <Divider />
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar>
                                    <PxblueSmall />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Light Full Width Divider" />
                        </ListItemButton>
                        <Divider sx={{ opacity: 0.6 }} />
                    </List>
                    <List>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar>
                                    <PxblueSmall />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Inset Divider" />
                        </ListItemButton>
                        <Divider variant={'inset'} />
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar>
                                    <PxblueSmall />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Light Inset Divider" />
                        </ListItemButton>
                        <Divider sx={{ opacity: 0.6 }} variant={'inset'} />
                    </List>
                    <List>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar>
                                    <PxblueSmall />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Middle Divider" />
                        </ListItemButton>
                        <Divider variant={'middle'} />
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar>
                                    <PxblueSmall />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Light Middle Divider" />
                        </ListItemButton>
                        <Divider sx={{ opacity: 0.6 }} variant={'middle'} />
                    </List>
                </Box>
            </Box>
            <Box sx={ContainerStyles}>
                <Typography variant={'body1'} sx={SectionTitleStyles}>
                    Vertical
                </Typography>
                <Box sx={DividerContainerStyles}>
                    <Grid
                        container
                        alignItems="center"
                        sx={{
                            width: 'fit-content',
                            border: `1px solid ${(theme.vars || theme).palette.divider}`,
                            borderRadius: `${(theme.vars || theme).shape.borderRadius}px`,
                            backgroundColor: (theme.vars || theme).palette.background.paper,
                            color: (theme.vars || theme).palette.text.secondary,
                            '& svg': {
                                m: 1.5,
                            },
                            '& hr': {
                                m: '0 4px',
                            },
                            m: '0 auto',
                        }}
                    >
                        <FormatAlignLeftIcon />
                        <FormatAlignCenterIcon />
                        <FormatAlignRightIcon />
                        <Divider orientation="vertical" flexItem />
                        <FormatBoldIcon />
                        <FormatItalicIcon />
                        <FormatUnderlinedIcon />
                    </Grid>
                </Box>
            </Box>
        </>
    );
};
