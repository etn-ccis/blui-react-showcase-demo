import React from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import { Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';

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

export const OutlinedButtonExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.container}>
            <div className={classes.buttonContainer}>
                <div className={classes.buttonPair}>
                    <Button variant="outlined">Default</Button>
                    <Button variant="outlined" disabled>
                        Default Disabled
                    </Button>
                </div>
                <div className={classes.buttonPair}>
                    <Button variant="outlined" color="primary">
                        Primary
                    </Button>
                    <Button variant="outlined" color="primary" disabled>
                        Primary Disabled
                    </Button>
                </div>
                <div className={classes.buttonPair}>
                    <Button variant="outlined" color="secondary">
                        Secondary
                    </Button>
                    <Button variant="outlined" color="secondary" disabled>
                        Secondary Disabled
                    </Button>
                </div>
            </div>
        </div>
    );
};
