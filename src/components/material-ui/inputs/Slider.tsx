import { createStyles, Grid, makeStyles, Slider, Theme, Typography, useTheme } from '@material-ui/core';
import { VolumeDown, VolumeUp } from '@material-ui/icons';
import React from 'react';

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
        buttonGroupContainer: {
            marginBottom: theme.spacing(1),
        },
    })
);

export const SliderExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
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
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Default
                </Typography>
                <div className={classes.buttonGroupContainer}>
                    <Typography variant={'body2'} className={classes.label}>
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
                </div>
                <div className={classes.buttonGroupContainer}>
                    <Typography variant={'body2'} className={classes.label}>
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
                </div>
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Primary w/ marks
                </Typography>
                <div className={classes.buttonGroupContainer}>
                    <Typography variant={'body2'} className={classes.label}>
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
                </div>
                <div className={classes.buttonGroupContainer}>
                    <Typography variant={'body2'} className={classes.label}>
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
                </div>
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Secondary w/ valueLabelDisplay auto
                </Typography>
                <div className={classes.buttonGroupContainer}>
                    <Typography variant={'body2'} className={classes.label}>
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
                </div>
                <div className={classes.buttonGroupContainer}>
                    <Typography variant={'body2'} className={classes.label}>
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
                </div>
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Default w/ valueDisplayLabel on
                </Typography>
                <div className={classes.buttonGroupContainer} style={{ marginTop: 56 }}>
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
                </div>
            </div>
        </>
    );
};
