import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import Box from '@mui/material/Box';

const labelStyles = {
    mb: 1,
};

const sectionTitleStyles = {
    mb: 2,
};

const switchContainerStyles = {
    mb: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const exampleRowStyles = {
    display: 'flex',
    justifyContent: 'space-evenly',
    mb: 2,
};

export const SwitchExample: React.FC = () => {
    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <>
            <Typography variant={'body1'} sx={sectionTitleStyles}>
                Default
            </Typography>
            <Box sx={exampleRowStyles}>
                <Box sx={switchContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Active
                    </Typography>
                    <Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />
                </Box>
                <Box sx={switchContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Disabled
                    </Typography>
                    <Switch disabled />
                </Box>
                <Box sx={switchContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Disabled Checked
                    </Typography>
                    <Switch disabled checked />
                </Box>
            </Box>

            <Typography variant={'body1'} sx={sectionTitleStyles}>
                Primary
            </Typography>
            <Box sx={exampleRowStyles}>
                <Box sx={switchContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Active
                    </Typography>
                    <Switch checked={state.checkedB} onChange={handleChange} name="checkedB" color="primary" />
                </Box>
                <Box sx={switchContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Disabled
                    </Typography>
                    <Switch disabled color="primary" />
                </Box>
                <Box sx={switchContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Disabled Checked
                    </Typography>
                    <Switch disabled checked color="primary" />
                </Box>
            </Box>

            <Typography variant={'body1'} sx={sectionTitleStyles}>
                Secondary
            </Typography>
            <Box sx={exampleRowStyles}>
                <Box sx={switchContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Active
                    </Typography>
                    <Switch checked={state.checkedC} onChange={handleChange} name="checkedC" color="secondary" />
                </Box>
                <Box sx={switchContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Disabled
                    </Typography>
                    <Switch disabled color="secondary" />
                </Box>
                <Box sx={switchContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Disabled Checked
                    </Typography>
                    <Switch disabled checked color="secondary" />
                </Box>
            </Box>
        </>
    );
};
