import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
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

const textFieldStyles = {
    width: '100%',
};

export const OutlinedTextFieldExample: React.FC = () => {
    const [name, setName] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>): void => {
        setName(event.target.value as string);
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
                    <TextField
                        variant={'outlined'}
                        onChange={handleChange}
                        value={name}
                        label="Name"
                        helperText={'Helper text'}
                        sx={textFieldStyles}
                    />
                </Box>
                <Box sx={selectContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Disabled
                    </Typography>
                    <TextField
                        variant={'outlined'}
                        onChange={handleChange}
                        value={name}
                        label="Name"
                        helperText={'Helper text'}
                        disabled
                        sx={textFieldStyles}
                    />
                </Box>
                <Box sx={selectContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Error
                    </Typography>
                    <TextField
                        variant={'outlined'}
                        onChange={handleChange}
                        value={name}
                        label="Name"
                        helperText={'Helper text'}
                        error
                        sx={textFieldStyles}
                    />
                </Box>
            </Box>
            <Box sx={containerStyles}>
                <Typography variant={'body1'} sx={sectionTitleStyles}>
                    Default
                </Typography>
                <Box sx={selectContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Enabled
                    </Typography>
                    <TextField
                        variant={'outlined'}
                        onChange={handleChange}
                        value={name}
                        label="Name"
                        helperText={'Helper text'}
                        sx={textFieldStyles}
                        color="primary"
                    />
                </Box>
                <Box sx={selectContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Disabled
                    </Typography>
                    <TextField
                        variant={'outlined'}
                        onChange={handleChange}
                        value={name}
                        label="Name"
                        helperText={'Helper text'}
                        disabled
                        sx={textFieldStyles}
                        color="primary"
                    />
                </Box>
                <Box sx={selectContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Error
                    </Typography>
                    <TextField
                        variant={'outlined'}
                        onChange={handleChange}
                        value={name}
                        label="Name"
                        helperText={'Helper text'}
                        error
                        sx={textFieldStyles}
                        color="primary"
                    />
                </Box>
            </Box>
            <Box sx={containerStyles}>
                <Typography variant={'body1'} sx={sectionTitleStyles}>
                    Default
                </Typography>
                <Box sx={selectContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Enabled
                    </Typography>
                    <TextField
                        variant={'outlined'}
                        onChange={handleChange}
                        value={name}
                        label="Name"
                        helperText={'Helper text'}
                        sx={textFieldStyles}
                        color="secondary"
                    />
                </Box>
                <Box sx={selectContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Disabled
                    </Typography>
                    <TextField
                        variant={'outlined'}
                        onChange={handleChange}
                        value={name}
                        label="Name"
                        helperText={'Helper text'}
                        disabled
                        sx={textFieldStyles}
                        color="secondary"
                    />
                </Box>
                <Box sx={selectContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Error
                    </Typography>
                    <TextField
                        variant={'outlined'}
                        onChange={handleChange}
                        value={name}
                        label="Name"
                        helperText={'Helper text'}
                        error
                        sx={textFieldStyles}
                        color="secondary"
                    />
                </Box>
            </Box>
        </>
    );
};
