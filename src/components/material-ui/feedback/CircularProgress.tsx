import React from 'react';
import Typography from '@material-ui/core/Typography';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import { Theme } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginBottom: theme.spacing(4),
        },
        sectionTitle: {
            marginBottom: theme.spacing(2),
        },
        exampleRow: {
            display: 'flex',
            justifyContent: 'space-evenly',
            marginBottom: theme.spacing(2),
        },
        label: {
            marginBottom: theme.spacing(1),
        },
        progressContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1,
        },
    })
);

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
    const theme = useTheme();
    const classes = useStyles(theme);

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
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Indeterminate (default)
                </Typography>
                <div className={classes.exampleRow}>
                    <div className={classes.progressContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Default
                        </Typography>
                        <CircularProgress />
                    </div>
                    <div className={classes.progressContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Primary
                        </Typography>
                        <CircularProgress color="primary" />
                    </div>
                    <div className={classes.progressContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Secondary
                        </Typography>
                        <CircularProgress color="secondary" />
                    </div>
                </div>
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Determinate
                </Typography>
                <div className={classes.exampleRow}>
                    <div className={classes.progressContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Default
                        </Typography>
                        <CircularProgress variant={'determinate'} value={progress} />
                    </div>
                    <div className={classes.progressContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Primary
                        </Typography>
                        <CircularProgress color="primary" variant={'determinate'} value={progress} />
                    </div>
                    <div className={classes.progressContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Secondary
                        </Typography>
                        <CircularProgress color="secondary" variant={'determinate'} value={progress} />
                    </div>
                </div>
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Determinate w/ Label
                </Typography>
                <div className={classes.exampleRow}>
                    <div className={classes.progressContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Default
                        </Typography>
                        <CircularProgressWithLabel value={progress} />
                    </div>
                    <div className={classes.progressContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Primary
                        </Typography>
                        <CircularProgressWithLabel color="primary" value={progress} />
                    </div>
                    <div className={classes.progressContainer}>
                        <Typography variant={'body2'} className={classes.label}>
                            Secondary
                        </Typography>
                        <CircularProgressWithLabel color="secondary" value={progress} />
                    </div>
                </div>
            </div>
        </>
    );
};
