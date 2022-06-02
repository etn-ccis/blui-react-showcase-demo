import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { useTheme, Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import React, { useState } from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        label: {
            marginBottom: theme.spacing(1),
        },
        sectionTitle: {
            marginBottom: theme.spacing(2),
        },
        switchContainer: {
            marginBottom: theme.spacing(1),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        exampleRow: {
            display: 'flex',
            justifyContent: 'space-evenly',
            marginBottom: theme.spacing(2),
        },
    })
);

export const SwitchExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <>
            <Typography variant={'body1'} className={classes.sectionTitle}>
                Default
            </Typography>
            <div className={classes.exampleRow}>
                <div className={classes.switchContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Active
                    </Typography>
                    <Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />
                </div>
                <div className={classes.switchContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Disabled
                    </Typography>
                    <Switch disabled />
                </div>
                <div className={classes.switchContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Disabled Checked
                    </Typography>
                    <Switch disabled checked />
                </div>
            </div>

            <Typography variant={'body1'} className={classes.sectionTitle}>
                Primary
            </Typography>
            <div className={classes.exampleRow}>
                <div className={classes.switchContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Active
                    </Typography>
                    <Switch checked={state.checkedB} onChange={handleChange} name="checkedB" color="primary" />
                </div>
                <div className={classes.switchContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Disabled
                    </Typography>
                    <Switch disabled color="primary" />
                </div>
                <div className={classes.switchContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Disabled Checked
                    </Typography>
                    <Switch disabled checked color="primary" />
                </div>
            </div>

            <Typography variant={'body1'} className={classes.sectionTitle}>
                Secondary
            </Typography>
            <div className={classes.exampleRow}>
                <div className={classes.switchContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Active
                    </Typography>
                    <Switch checked={state.checkedC} onChange={handleChange} name="checkedC" color="secondary" />
                </div>
                <div className={classes.switchContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Disabled
                    </Typography>
                    <Switch disabled color="secondary" />
                </div>
                <div className={classes.switchContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Disabled Checked
                    </Typography>
                    <Switch disabled checked color="secondary" />
                </div>
            </div>
        </>
    );
};
