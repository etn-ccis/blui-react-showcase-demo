import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Box from '@mui/material/Box';

const containerStyles = {
    mb: 4,
};

const sectionTitleStyles = {
    mb: 2,
};

const buttonStyles = {
    mr: 1,
};

const getSteps = (): string[] => [
    'Visit brightlayer-ui.github.io',
    'Find a sweet component',
    'Download said component',
];

export const StepperExample: React.FC = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());
    const steps = getSteps();

    const isStepOptional = (step: number): boolean => step === 1;

    const isStepSkipped = (step: number): boolean => skipped.has(step);

    const handleNext = (): void => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = (): void => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = (): void => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = (): void => {
        setActiveStep(0);
    };

    return (
        <>
            <Box sx={containerStyles}>
                <Typography variant={'body1'} sx={sectionTitleStyles}>
                    Horizontal Stepper
                </Typography>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps: { completed?: boolean } = {};
                        const labelProps: { optional?: React.ReactNode } = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = <Typography variant="caption">Optional</Typography>;
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <Box>
                    {activeStep === steps.length ? (
                        <Box>
                            <Button onClick={handleReset} sx={buttonStyles}>
                                Reset
                            </Button>
                        </Box>
                    ) : (
                        <Box>
                            <Button disabled={activeStep === 0} onClick={handleBack} sx={buttonStyles}>
                                Back
                            </Button>
                            {isStepOptional(activeStep) && (
                                <Button variant="contained" color="primary" onClick={handleSkip} sx={buttonStyles}>
                                    Skip
                                </Button>
                            )}
                            <Button variant="contained" color="primary" onClick={handleNext} sx={buttonStyles}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                    )}
                </Box>
            </Box>
            <Box sx={containerStyles}>
                <Typography variant={'body1'} sx={sectionTitleStyles}>
                    Vertical Stepper
                </Typography>
                <Stepper activeStep={activeStep} orientation={'vertical'}>
                    {steps.map((label, index) => {
                        const stepProps: { completed?: boolean } = {};
                        const labelProps: { optional?: React.ReactNode } = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = <Typography variant="caption">Optional</Typography>;
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <Box>
                    {activeStep === steps.length ? (
                        <Box>
                            <Button onClick={handleReset} sx={buttonStyles}>
                                Reset
                            </Button>
                        </Box>
                    ) : (
                        <Box>
                            <Button disabled={activeStep === 0} onClick={handleBack} sx={buttonStyles}>
                                Back
                            </Button>
                            {isStepOptional(activeStep) && (
                                <Button variant="contained" color="primary" onClick={handleSkip} sx={buttonStyles}>
                                    Skip
                                </Button>
                            )}
                            <Button variant="contained" color="primary" onClick={handleNext} sx={buttonStyles}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                    )}
                </Box>
            </Box>
        </>
    );
};
