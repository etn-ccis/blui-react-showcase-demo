import React from 'react';
import { useTheme, Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginBottom: theme.spacing(4),
        },
        sectionTitle: {
            marginBottom: theme.spacing(2),
        },
        label: {
            marginBottom: theme.spacing(1),
        },
        progressContainer: {
            display: 'flex',
            flexDirection: 'column',
            marginBottom: theme.spacing(2),
            flex: 1,
        },
        linearProgress: {
            width: '100%',
        },
    })
);

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
    const theme = useTheme();
    const classes = useStyles(theme);
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
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Indeterminate (default)
                </Typography>
                <div className={classes.progressContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Default
                    </Typography>
                    <LinearProgress className={classes.linearProgress} />
                </div>
                <div className={classes.progressContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Primary
                    </Typography>
                    <LinearProgress color="primary" className={classes.linearProgress} />
                </div>
                <div className={classes.progressContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Secondary
                    </Typography>
                    <LinearProgress color="secondary" className={classes.linearProgress} />
                </div>
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Determinate
                </Typography>
                <div className={classes.progressContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Default
                    </Typography>
                    <LinearProgress
                        variant={'determinate'}
                        value={determinateProgress}
                        className={classes.linearProgress}
                    />
                </div>
                <div className={classes.progressContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Primary
                    </Typography>
                    <LinearProgress
                        color="primary"
                        variant={'determinate'}
                        value={determinateProgress}
                        className={classes.linearProgress}
                    />
                </div>
                <div className={classes.progressContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Secondary
                    </Typography>
                    <LinearProgress
                        color="secondary"
                        variant={'determinate'}
                        value={determinateProgress}
                        className={classes.linearProgress}
                    />
                </div>
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Buffer
                </Typography>
                <div className={classes.progressContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Default
                    </Typography>
                    <LinearProgress
                        variant={'buffer'}
                        value={bufferProgress}
                        className={classes.linearProgress}
                        valueBuffer={buffer}
                    />
                </div>
                <div className={classes.progressContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Primary
                    </Typography>
                    <LinearProgress
                        color="primary"
                        variant={'buffer'}
                        value={bufferProgress}
                        className={classes.linearProgress}
                        valueBuffer={buffer}
                    />
                </div>
                <div className={classes.progressContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Secondary
                    </Typography>
                    <LinearProgress
                        color="secondary"
                        variant={'buffer'}
                        value={bufferProgress}
                        className={classes.linearProgress}
                        valueBuffer={buffer}
                    />
                </div>
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Determinate w/ Label
                </Typography>
                <div className={classes.progressContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Default
                    </Typography>
                    <LinearProgressWithLabel value={determinateProgress} className={classes.linearProgress} />
                </div>
                <div className={classes.progressContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Primary
                    </Typography>
                    <LinearProgressWithLabel
                        color="primary"
                        value={determinateProgress}
                        className={classes.linearProgress}
                    />
                </div>
                <div className={classes.progressContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Secondary
                    </Typography>
                    <LinearProgressWithLabel
                        color="secondary"
                        value={determinateProgress}
                        className={classes.linearProgress}
                    />
                </div>
            </div>
        </>
    );
};
