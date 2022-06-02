import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MobileStepper from '@mui/material/MobileStepper';
import { useTheme, Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginBottom: theme.spacing(4),
        },
        sectionTitle: {
            marginBottom: theme.spacing(2),
        },
    })
);

export const MobileStepperExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [activeDotStep, setActiveDotStep] = React.useState(0);
    const [activeProgressStep, setActiveProgressStep] = React.useState(0);
    const [activeTextStep, setActiveTextStep] = React.useState(0);

    const handleDotNext = (): void => {
        setActiveDotStep((prevActiveStep: number) => prevActiveStep + 1);
    };

    const handleDotBack = (): void => {
        setActiveDotStep((prevActiveStep: number) => prevActiveStep - 1);
    };

    const handleProgressNext = (): void => {
        setActiveProgressStep((prevActiveStep: number) => prevActiveStep + 1);
    };

    const handleProgressBack = (): void => {
        setActiveProgressStep((prevActiveStep: number) => prevActiveStep - 1);
    };

    const handleTextNext = (): void => {
        setActiveTextStep((prevActiveStep: number) => prevActiveStep + 1);
    };

    const handleTextBack = (): void => {
        setActiveTextStep((prevActiveStep: number) => prevActiveStep - 1);
    };

    return (
        <>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Dots (default)
                </Typography>
                <MobileStepper
                    variant="dots"
                    steps={5}
                    position="static"
                    activeStep={activeDotStep}
                    nextButton={
                        <Button size="small" onClick={handleDotNext} disabled={activeDotStep === 4}>
                            Next
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleDotBack} disabled={activeDotStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            Back
                        </Button>
                    }
                />
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Progress
                </Typography>
                <MobileStepper
                    variant="progress"
                    steps={5}
                    position="static"
                    activeStep={activeProgressStep}
                    nextButton={
                        <Button size="small" onClick={handleProgressNext} disabled={activeProgressStep === 4}>
                            Next
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleProgressBack} disabled={activeProgressStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            Back
                        </Button>
                    }
                />
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Text
                </Typography>
                <MobileStepper
                    variant="text"
                    steps={5}
                    position="static"
                    activeStep={activeTextStep}
                    nextButton={
                        <Button size="small" onClick={handleTextNext} disabled={activeTextStep === 4}>
                            Next
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleTextBack} disabled={activeTextStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            Back
                        </Button>
                    }
                />
            </div>
        </>
    );
};
