import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import React from 'react';
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

const sliderContainerStyles = {
    mb: 1,
};

export const SliderExample: React.FC = () => {
    const [defaultValue, setDefaultValue] = React.useState<number>(30);
    const [default2Value, setDefault2Value] = React.useState<number>(30);
    const [primaryValue, setPrimaryValue] = React.useState<number>(30);
    const [secondaryValue, setSecondaryValue] = React.useState<number>(30);

    const handleDefaultChange = (event: any, newValue: number | number[]): void => {
        setDefaultValue(newValue as number);
    };

    const handleDefault2Change = (event: any, newValue: number | number[]): void => {
        setDefault2Value(newValue as number);
    };

    const handlePrimaryChange = (event: any, newValue: number | number[]): void => {
        setPrimaryValue(newValue as number);
    };

    const handleSecondaryChange = (event: any, newValue: number | number[]): void => {
        setSecondaryValue(newValue as number);
    };

    return (
        <>
            <Box sx={containerStyles}>
                <Typography variant={'body1'} sx={sectionTitleStyles}>
                    Default
                </Typography>
                <Box sx={sliderContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Active
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item>
                            <VolumeDown />
                        </Grid>
                        <Grid item xs>
                            <Slider value={defaultValue} onChange={handleDefaultChange} />
                        </Grid>
                        <Grid item>
                            <VolumeUp />
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={sliderContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Disabled
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item>
                            <VolumeDown />
                        </Grid>
                        <Grid item xs>
                            <Slider disabled defaultValue={30} />
                        </Grid>
                        <Grid item>
                            <VolumeUp />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box sx={containerStyles}>
                <Typography variant={'body1'} sx={sectionTitleStyles}>
                    Primary w/ marks
                </Typography>
                <Box sx={sliderContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Active
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item>
                            <VolumeDown />
                        </Grid>
                        <Grid item xs>
                            <Slider
                                value={primaryValue}
                                onChange={handlePrimaryChange}
                                color="primary"
                                step={10}
                                marks
                                min={10}
                                max={100}
                            />
                        </Grid>
                        <Grid item>
                            <VolumeUp />
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={sliderContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Disabled
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item>
                            <VolumeDown />
                        </Grid>
                        <Grid item xs>
                            <Slider disabled defaultValue={30} color="primary" step={10} marks min={10} max={100} />
                        </Grid>
                        <Grid item>
                            <VolumeUp />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box sx={containerStyles}>
                <Typography variant={'body1'} sx={sectionTitleStyles}>
                    Secondary w/ valueLabelDisplay auto
                </Typography>
                <Box sx={sliderContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Active
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item>
                            <VolumeDown />
                        </Grid>
                        <Grid item xs>
                            <Slider
                                value={secondaryValue}
                                onChange={handleSecondaryChange}
                                color="secondary"
                                valueLabelDisplay="auto"
                                step={10}
                                min={10}
                                max={100}
                            />
                        </Grid>
                        <Grid item>
                            <VolumeUp />
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={sliderContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Disabled
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item>
                            <VolumeDown />
                        </Grid>
                        <Grid item xs>
                            <Slider
                                disabled
                                defaultValue={30}
                                color="secondary"
                                valueLabelDisplay="auto"
                                step={10}
                                min={10}
                                max={100}
                            />
                        </Grid>
                        <Grid item>
                            <VolumeUp />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box sx={containerStyles}>
                <Typography variant={'body1'} sx={sectionTitleStyles}>
                    Default w/ valueDisplayLabel on
                </Typography>
                <Box sx={sliderContainerStyles} style={{ marginTop: 56 }}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <VolumeDown />
                        </Grid>
                        <Grid item xs>
                            <Slider value={default2Value} onChange={handleDefault2Change} valueLabelDisplay="on" />
                        </Grid>
                        <Grid item>
                            <VolumeUp />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};
