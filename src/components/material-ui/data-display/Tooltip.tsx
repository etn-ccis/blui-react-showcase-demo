import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';
import Box from '@mui/material/Box';

const tooltipContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
};

export const TooltipExample: React.FC = () => (
    <Box
        sx={{
            mb: 4,
        }}
    >
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                mb: 2,
            }}
        >
            <Box sx={tooltipContainerStyles}>
                <Tooltip title="I'm a default tooltip">
                    <Button variant="outlined">Default</Button>
                </Tooltip>
            </Box>
            <Box sx={tooltipContainerStyles}>
                <Tooltip title="I'm an arrow tooltip" arrow>
                    <Button variant="outlined">Arrow</Button>
                </Tooltip>
            </Box>
            <Box sx={tooltipContainerStyles}>
                <Tooltip
                    title="I'm a tooltip with a fade animation"
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 600 }}
                >
                    <Button variant="outlined">Fade</Button>
                </Tooltip>
            </Box>
            <Box sx={tooltipContainerStyles}>
                <Tooltip title="I'm a tooltip with a zoom animation" TransitionComponent={Zoom}>
                    <Button variant="outlined">Zoom</Button>
                </Tooltip>
            </Box>
        </Box>
    </Box>
);
