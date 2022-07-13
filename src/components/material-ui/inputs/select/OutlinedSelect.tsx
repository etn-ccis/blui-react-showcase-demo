import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
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

const selectContainerStyles = {
    mb: 1,
};

const formControlStyles = {
    width: '100%',
};

export const OutlinedSelectExample: React.FC = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent): void => {
        setAge(event.target.value);
    };

    return (
        <>
            <Box sx={containerStyles}>
                <Typography variant={'body1'} sx={sectionTitleStyles}>
                    Default
                </Typography>
                <Box sx={selectContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Enabled
                    </Typography>
                    <FormControl variant={'outlined'} sx={formControlStyles}>
                        <InputLabel>Label</InputLabel>
                        <Select value={age} onChange={handleChange} label={'Label'}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Helper text</FormHelperText>
                    </FormControl>
                </Box>
                <Box sx={selectContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Disabled
                    </Typography>
                    <FormControl variant={'outlined'} disabled sx={formControlStyles}>
                        <InputLabel>Label</InputLabel>
                        <Select value={age} label={'Label'}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Helper text</FormHelperText>
                    </FormControl>
                </Box>
                <Box sx={selectContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Error
                    </Typography>
                    <FormControl variant={'outlined'} sx={formControlStyles} error>
                        <InputLabel>Label</InputLabel>
                        <Select value={age} onChange={handleChange} label={'Label'}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Error text</FormHelperText>
                    </FormControl>
                </Box>
            </Box>
            <Box sx={containerStyles}>
                <Typography variant={'body1'} sx={sectionTitleStyles}>
                    Primary
                </Typography>
                <Box sx={selectContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Enabled
                    </Typography>
                    <FormControl variant={'outlined'} sx={formControlStyles} color="primary">
                        <InputLabel>Label</InputLabel>
                        <Select value={age} onChange={handleChange} label={'Label'}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Helper text</FormHelperText>
                    </FormControl>
                </Box>
                <Box sx={selectContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Disabled
                    </Typography>
                    <FormControl variant={'outlined'} disabled sx={formControlStyles} color="primary">
                        <InputLabel>Label</InputLabel>
                        <Select value={age} label={'Label'}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Helper text</FormHelperText>
                    </FormControl>
                </Box>
                <Box sx={selectContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Error
                    </Typography>
                    <FormControl variant={'outlined'} sx={formControlStyles} error color="primary">
                        <InputLabel>Label</InputLabel>
                        <Select value={age} onChange={handleChange} label={'Label'}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Error text</FormHelperText>
                    </FormControl>
                </Box>
            </Box>
            <Box sx={containerStyles}>
                <Typography variant={'body1'} sx={sectionTitleStyles}>
                    Secondary
                </Typography>
                <Box sx={selectContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Enabled
                    </Typography>
                    <FormControl variant={'outlined'} sx={formControlStyles} color="secondary">
                        <InputLabel>Label</InputLabel>
                        <Select value={age} onChange={handleChange} label={'Label'}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Helper text</FormHelperText>
                    </FormControl>
                </Box>
                <Box sx={selectContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Disabled
                    </Typography>
                    <FormControl variant={'outlined'} disabled sx={formControlStyles} color="secondary">
                        <InputLabel>Label</InputLabel>
                        <Select value={age} label={'Label'}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Helper text</FormHelperText>
                    </FormControl>
                </Box>
                <Box sx={selectContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Error
                    </Typography>
                    <FormControl variant={'outlined'} sx={formControlStyles} error color="secondary">
                        <InputLabel>Label</InputLabel>
                        <Select value={age} onChange={handleChange} label={'Label'}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Error text</FormHelperText>
                    </FormControl>
                </Box>
            </Box>
        </>
    );
};
