import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const containerStyles = {
    mb: 4,
};

const sectionTitleStyles = {
    mb: 2,
};

const labelStyles = {
    mb: 1,
};

const buttonGroupContainerStyles = {
    mb: 1,
};

export const ContainedButtonGroupExample: React.FC = () => (
    <>
        <Box sx={containerStyles}>
            <Typography variant={'body1'} sx={sectionTitleStyles}>
                Default
            </Typography>
            <Box sx={buttonGroupContainerStyles}>
                <Typography variant={'body2'} sx={labelStyles}>
                    Active
                </Typography>
                <ButtonGroup color="inherit" variant="contained">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Box>
            <Box sx={buttonGroupContainerStyles}>
                <Typography variant={'body2'} sx={labelStyles}>
                    Disabled
                </Typography>
                <ButtonGroup color="inherit" variant="contained" disabled>
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Box>
        </Box>
        <Box sx={containerStyles}>
            <Typography variant={'body1'} sx={sectionTitleStyles}>
                Primary
            </Typography>
            <Box sx={buttonGroupContainerStyles}>
                <Typography variant={'body2'} sx={labelStyles}>
                    Active
                </Typography>
                <ButtonGroup variant="contained" color="primary">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Box>
            <Box sx={buttonGroupContainerStyles}>
                <Typography variant={'body2'} sx={labelStyles}>
                    Disabled
                </Typography>
                <ButtonGroup variant="contained" disabled color="primary">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Box>
        </Box>
        <Box sx={containerStyles}>
            <Typography variant={'body1'} sx={sectionTitleStyles}>
                Secondary
            </Typography>
            <Box sx={buttonGroupContainerStyles}>
                <Typography variant={'body2'} sx={labelStyles}>
                    Active
                </Typography>
                <ButtonGroup variant="contained" color="secondary">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Box>
            <Box sx={buttonGroupContainerStyles}>
                <Typography variant={'body2'} sx={labelStyles}>
                    Disabled
                </Typography>
                <ButtonGroup variant="contained" disabled color="secondary">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Box>
        </Box>
    </>
);
