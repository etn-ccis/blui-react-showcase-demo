import React from 'react';
import Typography from '@mui/material/Typography';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const containerStyles = {
    mb: 4,
};

const sectionTitleStyles = {
    mb: 2,
};

const exampleRowStyles = {
    display: 'flex',
    justifyContent: 'space-evenly',
    mb: 2,
};

const labelStyles = {
    mb: 1,
};

const progressContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
};

const CircularProgressWithLabel = (props: CircularProgressProps & { value: number }): JSX.Element => (
    <Box position="relative" display="inline-flex">
        <CircularProgress variant="determinate" {...props} />
        <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
                props.value
            )}%`}</Typography>
        </Box>
    </Box>
);

export const CircularProgressExample: React.FC = () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 500);

        return (): any => {
            clearInterval(timer);
        };
    }, []);

    return (
        <>
            <Box sx={containerStyles}>
                <Typography variant={'body1'} sx={sectionTitleStyles}>
                    Indeterminate (default)
                </Typography>
                <Box sx={exampleRowStyles}>
                    <Box sx={progressContainerStyles}>
                        <Typography variant={'body2'} sx={labelStyles}>
                            Default
                        </Typography>
                        <CircularProgress />
                    </Box>
                    <Box sx={progressContainerStyles}>
                        <Typography variant={'body2'} sx={labelStyles}>
                            Primary
                        </Typography>
                        <CircularProgress color="primary" />
                    </Box>
                    <Box sx={progressContainerStyles}>
                        <Typography variant={'body2'} sx={labelStyles}>
                            Secondary
                        </Typography>
                        <CircularProgress color="secondary" />
                    </Box>
                </Box>
            </Box>
            <Box sx={containerStyles}>
                <Typography variant={'body1'} sx={sectionTitleStyles}>
                    Determinate
                </Typography>
                <Box sx={exampleRowStyles}>
                    <Box sx={progressContainerStyles}>
                        <Typography variant={'body2'} sx={labelStyles}>
                            Default
                        </Typography>
                        <CircularProgress variant={'determinate'} value={progress} />
                    </Box>
                    <Box sx={progressContainerStyles}>
                        <Typography variant={'body2'} sx={labelStyles}>
                            Primary
                        </Typography>
                        <CircularProgress color="primary" variant={'determinate'} value={progress} />
                    </Box>
                    <Box sx={progressContainerStyles}>
                        <Typography variant={'body2'} sx={labelStyles}>
                            Secondary
                        </Typography>
                        <CircularProgress color="secondary" variant={'determinate'} value={progress} />
                    </Box>
                </Box>
            </Box>
            <Box sx={containerStyles}>
                <Typography variant={'body1'} sx={sectionTitleStyles}>
                    Determinate w/ Label
                </Typography>
                <Box sx={exampleRowStyles}>
                    <Box sx={progressContainerStyles}>
                        <Typography variant={'body2'} sx={labelStyles}>
                            Default
                        </Typography>
                        <CircularProgressWithLabel value={progress} />
                    </Box>
                    <Box sx={progressContainerStyles}>
                        <Typography variant={'body2'} sx={labelStyles}>
                            Primary
                        </Typography>
                        <CircularProgressWithLabel color="primary" value={progress} />
                    </Box>
                    <Box sx={progressContainerStyles}>
                        <Typography variant={'body2'} sx={labelStyles}>
                            Secondary
                        </Typography>
                        <CircularProgressWithLabel color="secondary" value={progress} />
                    </Box>
                </Box>
            </Box>
        </>
    );
};
