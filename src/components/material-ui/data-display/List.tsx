import React from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Folder from '@mui/icons-material/Folder';
import Box from '@mui/material/Box';

const ContainerStyles = {
    mb: 4,
};

const SectionTitleStyles = {
    mb: 2,
};

const generate = (element: React.ReactElement): React.ReactElement[] =>
    [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        })
    );

export const ListExample: React.FC = () => (
    <>
        <Box sx={ContainerStyles}>
            <Typography variant={'body1'} sx={SectionTitleStyles}>
                Default
            </Typography>

            <List>
                {generate(
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <Folder />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Single-line item" secondary={'Secondary text'} />
                    </ListItem>
                )}
            </List>
        </Box>

        <Box sx={ContainerStyles}>
            <Typography variant={'body1'} sx={SectionTitleStyles}>
                Dense
            </Typography>

            <List>
                {generate(
                    <ListItem dense>
                        <ListItemAvatar>
                            <Avatar>
                                <Folder />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Single-line item" secondary={'Secondary text'} />
                    </ListItem>
                )}
            </List>
        </Box>
    </>
);
