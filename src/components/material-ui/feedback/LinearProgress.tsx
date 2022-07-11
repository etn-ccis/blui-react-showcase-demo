import React from 'react';
import Typography from '@mui/material/Typography';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
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

const progressContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    mb: 2,
    flex: 1,
};

const linearProgressStyles = {
    width: '100%',
};

const LinearProgressWithLabel = (props: LinearProgressProps & { value: number }): JSX.Element => (
    <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
            <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box minWidth={35}>
            <Typography variant="body2" color="textSecondary">{`${Math.round(props.value)}%`}</Typography>
        </Box>
    </Box>
);

export const LinearProgressExample: React.FC = () => {
    const [determinateProgress, setDeterminateProgress] = React.useState(0);
    const [bufferProgress, setBufferProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);
    const progressRef = React.useRef(() => {});

    React.useEffect(() => {
        const timer = setInterval(() => {
            setDeterminateProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 500);

        return (): any => {
            clearInterval(timer);
        };
    }, []);

    React.useEffect(() => {
        progressRef.current = (): any => {
            if (bufferProgress > 100) {
                setBufferProgress(0);
                setBuffer(10);
            } else {
                const diff = Math.random() * 10;
                const diff2 = Math.random() * 10;
                setBufferProgress(bufferProgress + diff);
                setBuffer(bufferProgress + diff + diff2);
            }
        };
    });

    React.useEffect(() => {
        const timer = setInterval(() => {
            progressRef.current();
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
                <Box sx={progressContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Default
                    </Typography>
                    <LinearProgress sx={linearProgressStyles} />
                </Box>
                <Box sx={progressContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Primary
                    </Typography>
                    <LinearProgress color="primary" sx={linearProgressStyles} />
                </Box>
                <Box sx={progressContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Secondary
                    </Typography>
                    <LinearProgress color="secondary" sx={linearProgressStyles} />
                </Box>
            </Box>
            <Box sx={containerStyles}>
                <Typography variant={'body1'} sx={sectionTitleStyles}>
                    Determinate
                </Typography>
                <Box sx={progressContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Default
                    </Typography>
                    <LinearProgress variant={'determinate'} value={determinateProgress} sx={linearProgressStyles} />
                </Box>
                <Box sx={progressContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Primary
                    </Typography>
                    <LinearProgress
                        color="primary"
                        variant={'determinate'}
                        value={determinateProgress}
                        sx={linearProgressStyles}
                    />
                </Box>
                <Box sx={progressContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Secondary
                    </Typography>
                    <LinearProgress
                        color="secondary"
                        variant={'determinate'}
                        value={determinateProgress}
                        sx={linearProgressStyles}
                    />
                </Box>
            </Box>
            <Box sx={containerStyles}>
                <Typography variant={'body1'} sx={sectionTitleStyles}>
                    Buffer
                </Typography>
                <Box sx={progressContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Default
                    </Typography>
                    <LinearProgress
                        variant={'buffer'}
                        value={bufferProgress}
                        sx={linearProgressStyles}
                        valueBuffer={buffer}
                    />
                </Box>
                <Box sx={progressContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Primary
                    </Typography>
                    <LinearProgress
                        color="primary"
                        variant={'buffer'}
                        value={bufferProgress}
                        sx={linearProgressStyles}
                        valueBuffer={buffer}
                    />
                </Box>
                <Box sx={progressContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Secondary
                    </Typography>
                    <LinearProgress
                        color="secondary"
                        variant={'buffer'}
                        value={bufferProgress}
                        sx={linearProgressStyles}
                        valueBuffer={buffer}
                    />
                </Box>
            </Box>
            <Box sx={containerStyles}>
                <Typography variant={'body1'} sx={sectionTitleStyles}>
                    Determinate w/ Label
                </Typography>
                <Box sx={progressContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Default
                    </Typography>
                    <LinearProgressWithLabel value={determinateProgress} sx={linearProgressStyles} />
                </Box>
                <Box sx={progressContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Primary
                    </Typography>
                    <LinearProgressWithLabel color="primary" value={determinateProgress} sx={linearProgressStyles} />
                </Box>
                <Box sx={progressContainerStyles}>
                    <Typography variant={'body2'} sx={labelStyles}>
                        Secondary
                    </Typography>
                    <LinearProgressWithLabel color="secondary" value={determinateProgress} sx={linearProgressStyles} />
                </Box>
            </Box>
        </>
    );
};
