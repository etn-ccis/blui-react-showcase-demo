import React from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Favorite from '@mui/icons-material/Favorite';
import BettyWhite from '../../../assets/betty_white.jpeg';
import Box from '@mui/material/Box';

const ContainerStyles = {
    mb: 4,
    '& .MuiChip-root': {
        mr: 1,
    },
};

const SectionTitleStyles = {
    mb: 2,
};

const ExampleRowStyles = {
    display: 'flex',
    justifyContent: 'space-evenly',
    mb: 2,
};

const ChipContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
};

const ChipPairStyles = {
    mb: 1,
    '& > *': {
        mr: 1,
    },
};

export const OutlineChipExample: React.FC = () => (
    <>
        <Box sx={ContainerStyles}>
            <Typography variant={'body1'} sx={SectionTitleStyles}>
                Default
            </Typography>
            <Box sx={ExampleRowStyles}>
                <Box sx={ChipContainerStyles}>
                    <Box sx={ChipPairStyles}>
                        <Chip variant={'outlined'} label="Basic" color={'default'} />
                        <Chip variant={'outlined'} label="Disabled" color={'default'} disabled />
                    </Box>
                    <Box sx={ChipPairStyles}>
                        <Chip variant={'outlined'} label="Clickable" color={'default'} clickable />
                        <Chip variant={'outlined'} label="Disabled" color={'default'} clickable disabled />
                    </Box>
                    <Box sx={ChipPairStyles}>
                        <Chip
                            variant={'outlined'}
                            label="Removable"
                            color={'default'}
                            clickable
                            onDelete={(): void => {}}
                        />
                        <Chip
                            variant={'outlined'}
                            label="Disabled"
                            color={'default'}
                            clickable
                            onDelete={(): void => {}}
                            disabled
                        />
                    </Box>
                    <Box sx={ChipPairStyles}>
                        <Chip variant={'outlined'} label="With Icon" color={'default'} clickable icon={<Favorite />} />
                        <Chip
                            variant={'outlined'}
                            label="Disabled"
                            color={'default'}
                            clickable
                            icon={<Favorite />}
                            disabled
                        />
                    </Box>
                    <Box sx={ChipPairStyles}>
                        <Chip
                            variant={'outlined'}
                            label="Dual Icon"
                            color={'default'}
                            clickable
                            onDelete={(): void => {}}
                            icon={<Favorite />}
                        />
                        <Chip
                            variant={'outlined'}
                            label="Disabled"
                            color={'default'}
                            clickable
                            onDelete={(): void => {}}
                            icon={<Favorite />}
                            disabled
                        />
                    </Box>
                    <Box sx={ChipPairStyles}>
                        <Chip
                            variant={'outlined'}
                            label="Text Avatar"
                            color={'default'}
                            clickable
                            avatar={<Avatar>MB</Avatar>}
                        />
                        <Chip
                            variant={'outlined'}
                            label="Disabled"
                            color={'default'}
                            clickable
                            avatar={<Avatar>MB</Avatar>}
                            disabled
                        />
                    </Box>
                    <Box sx={ChipPairStyles}>
                        <Chip
                            variant={'outlined'}
                            label="Image Avatar"
                            color={'default'}
                            clickable
                            avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                        />
                        <Chip
                            variant={'outlined'}
                            label="Disabled"
                            color={'default'}
                            clickable
                            avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                            disabled
                        />
                    </Box>
                    <Box sx={ChipPairStyles}>
                        <Chip
                            variant={'outlined'}
                            label="Removable Avatar"
                            color={'default'}
                            clickable
                            avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                            onDelete={(): void => {}}
                        />
                        <Chip
                            variant={'outlined'}
                            label="Disabled"
                            color={'default'}
                            clickable
                            avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                            onDelete={(): void => {}}
                            disabled
                        />
                    </Box>
                </Box>
            </Box>
        </Box>

        <Box sx={ContainerStyles}>
            <Typography variant={'body1'} sx={SectionTitleStyles}>
                Primary
            </Typography>
            <Box sx={ExampleRowStyles}>
                <Box sx={ChipContainerStyles}>
                    <Box sx={ChipPairStyles}>
                        <Chip variant={'outlined'} label="Basic" color={'primary'} />
                        <Chip variant={'outlined'} label="Disabled" color={'primary'} disabled />
                    </Box>
                    <Box sx={ChipPairStyles}>
                        <Chip variant={'outlined'} label="Clickable" color={'primary'} clickable />
                        <Chip variant={'outlined'} label="Disabled" color={'primary'} clickable disabled />
                    </Box>
                    <Box sx={ChipPairStyles}>
                        <Chip
                            variant={'outlined'}
                            label="Removable"
                            color={'primary'}
                            clickable
                            onDelete={(): void => {}}
                        />
                        <Chip
                            variant={'outlined'}
                            label="Disabled"
                            color={'primary'}
                            clickable
                            onDelete={(): void => {}}
                            disabled
                        />
                    </Box>
                    <Box sx={ChipPairStyles}>
                        <Chip variant={'outlined'} label="With Icon" color={'primary'} clickable icon={<Favorite />} />
                        <Chip
                            variant={'outlined'}
                            label="Disabled"
                            color={'primary'}
                            clickable
                            icon={<Favorite />}
                            disabled
                        />
                    </Box>
                    <Box sx={ChipPairStyles}>
                        <Chip
                            variant={'outlined'}
                            label="Dual Icon"
                            color={'primary'}
                            clickable
                            onDelete={(): void => {}}
                            icon={<Favorite />}
                        />
                        <Chip
                            variant={'outlined'}
                            label="Disabled"
                            color={'primary'}
                            clickable
                            onDelete={(): void => {}}
                            icon={<Favorite />}
                            disabled
                        />
                    </Box>
                    <Box sx={ChipPairStyles}>
                        <Chip
                            variant={'outlined'}
                            label="Text Avatar"
                            color={'primary'}
                            clickable
                            avatar={<Avatar>MB</Avatar>}
                        />
                        <Chip
                            variant={'outlined'}
                            label="Disabled"
                            color={'primary'}
                            clickable
                            avatar={<Avatar>MB</Avatar>}
                            disabled
                        />
                    </Box>
                    <Box sx={ChipPairStyles}>
                        <Chip
                            variant={'outlined'}
                            label="Image Avatar"
                            color={'primary'}
                            clickable
                            avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                        />
                        <Chip
                            variant={'outlined'}
                            label="Disabled"
                            color={'primary'}
                            clickable
                            avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                            disabled
                        />
                    </Box>
                    <Box sx={ChipPairStyles}>
                        <Chip
                            variant={'outlined'}
                            label="Removable Avatar"
                            color={'primary'}
                            clickable
                            avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                            onDelete={(): void => {}}
                        />
                        <Chip
                            variant={'outlined'}
                            label="Disabled"
                            color={'primary'}
                            clickable
                            avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                            onDelete={(): void => {}}
                            disabled
                        />
                    </Box>
                </Box>
            </Box>
        </Box>

        <Box sx={ContainerStyles}>
            <Typography variant={'body1'} sx={SectionTitleStyles}>
                Secondary
            </Typography>
            <Box sx={ExampleRowStyles}>
                <Box sx={ChipContainerStyles}>
                    <Box sx={ChipPairStyles}>
                        <Chip variant={'outlined'} label="Basic" color={'secondary'} />
                        <Chip variant={'outlined'} label="Disabled" color={'secondary'} disabled />
                    </Box>
                    <Box sx={ChipPairStyles}>
                        <Chip variant={'outlined'} label="Clickable" color={'secondary'} clickable />
                        <Chip variant={'outlined'} label="Disabled" color={'secondary'} clickable disabled />
                    </Box>
                    <Box sx={ChipPairStyles}>
                        <Chip
                            variant={'outlined'}
                            label="Removable"
                            color={'secondary'}
                            clickable
                            onDelete={(): void => {}}
                        />
                        <Chip
                            variant={'outlined'}
                            label="Disabled"
                            color={'secondary'}
                            clickable
                            onDelete={(): void => {}}
                            disabled
                        />
                    </Box>
                    <Box sx={ChipPairStyles}>
                        <Chip
                            variant={'outlined'}
                            label="With Icon"
                            color={'secondary'}
                            clickable
                            icon={<Favorite />}
                        />
                        <Chip
                            variant={'outlined'}
                            label="Disabled"
                            color={'secondary'}
                            clickable
                            icon={<Favorite />}
                            disabled
                        />
                    </Box>
                    <Box sx={ChipPairStyles}>
                        <Chip
                            variant={'outlined'}
                            label="Dual Icon"
                            color={'secondary'}
                            clickable
                            onDelete={(): void => {}}
                            icon={<Favorite />}
                        />
                        <Chip
                            variant={'outlined'}
                            label="Disabled"
                            color={'secondary'}
                            clickable
                            onDelete={(): void => {}}
                            icon={<Favorite />}
                            disabled
                        />
                    </Box>
                    <Box sx={ChipPairStyles}>
                        <Chip
                            variant={'outlined'}
                            label="Text Avatar"
                            color={'secondary'}
                            clickable
                            avatar={<Avatar>MB</Avatar>}
                        />
                        <Chip
                            variant={'outlined'}
                            label="Disabled"
                            color={'secondary'}
                            clickable
                            avatar={<Avatar>MB</Avatar>}
                            disabled
                        />
                    </Box>
                    <Box sx={ChipPairStyles}>
                        <Chip
                            variant={'outlined'}
                            label="Image Avatar"
                            color={'secondary'}
                            clickable
                            avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                        />
                        <Chip
                            variant={'outlined'}
                            label="Disabled"
                            color={'secondary'}
                            clickable
                            avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                            disabled
                        />
                    </Box>
                    <Box sx={ChipPairStyles}>
                        <Chip
                            variant={'outlined'}
                            label="Removable Avatar"
                            color={'secondary'}
                            clickable
                            avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                            onDelete={(): void => {}}
                        />
                        <Chip
                            variant={'outlined'}
                            label="Disabled"
                            color={'secondary'}
                            clickable
                            avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                            onDelete={(): void => {}}
                            disabled
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    </>
);
