import React from 'react';
import { useTheme, Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginBottom: theme.spacing(4),
        },
        buttonContainer: {
            display: 'flex',
            flexDirection: 'column',
        },
        buttonPair: {
            marginBottom: theme.spacing(2),
            '& > *': {
                width: 168,
                marginRight: theme.spacing(2),
            },
        },
    })
);

export const ContainedButtonExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.container}>
            <div className={classes.buttonContainer}>
                <div className={classes.buttonPair}>
                    <Button variant="contained">Default</Button>
                    <Button variant="contained" disabled>
                        Default Disabled
                    </Button>
                </div>
                <div className={classes.buttonPair}>
                    <Button variant="contained" color="primary">
                        Primary
                    </Button>
                    <Button variant="contained" color="primary" disabled>
                        Primary Disabled
                    </Button>
                </div>
                <div className={classes.buttonPair}>
                    <Button variant="contained" color="secondary">
                        Secondary
                    </Button>
                    <Button variant="contained" color="secondary" disabled>
                        Secondary Disabled
                    </Button>
                </div>
            </div>
        </div>
    );
};
