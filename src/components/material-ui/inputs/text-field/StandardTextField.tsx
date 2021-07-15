import { createStyles, makeStyles, TextField, Theme, Typography, useTheme } from '@material-ui/core';
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
        selectContainer: {
            marginBottom: theme.spacing(1),
        },
        textField: {
            width: '100%',
        },
    })
);

export const StandardTextFieldExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [name, setName] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>): void => {
        setName(event.target.value as string);
    };

    return (
        <>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Default
                </Typography>
                <div className={classes.selectContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Enabled
                    </Typography>
                    <TextField
                        variant={'standard'}
                        onChange={handleChange}
                        value={name}
                        label="Name"
                        helperText={'Helper text'}
                        className={classes.textField}
                    />
                </div>
                <div className={classes.selectContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Disabled
                    </Typography>
                    <TextField
                        variant={'standard'}
                        onChange={handleChange}
                        value={name}
                        label="Name"
                        helperText={'Helper text'}
                        disabled
                        className={classes.textField}
                    />
                </div>
                <div className={classes.selectContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Error
                    </Typography>
                    <TextField
                        variant={'standard'}
                        onChange={handleChange}
                        value={name}
                        label="Name"
                        helperText={'Helper text'}
                        error
                        className={classes.textField}
                    />
                </div>
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Default
                </Typography>
                <div className={classes.selectContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Enabled
                    </Typography>
                    <TextField
                        variant={'standard'}
                        onChange={handleChange}
                        value={name}
                        label="Name"
                        helperText={'Helper text'}
                        className={classes.textField}
                        color="primary"
                    />
                </div>
                <div className={classes.selectContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Disabled
                    </Typography>
                    <TextField
                        variant={'standard'}
                        onChange={handleChange}
                        value={name}
                        label="Name"
                        helperText={'Helper text'}
                        disabled
                        className={classes.textField}
                        color="primary"
                    />
                </div>
                <div className={classes.selectContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Error
                    </Typography>
                    <TextField
                        variant={'standard'}
                        onChange={handleChange}
                        value={name}
                        label="Name"
                        helperText={'Helper text'}
                        error
                        className={classes.textField}
                        color="primary"
                    />
                </div>
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Default
                </Typography>
                <div className={classes.selectContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Enabled
                    </Typography>
                    <TextField
                        variant={'standard'}
                        onChange={handleChange}
                        value={name}
                        label="Name"
                        helperText={'Helper text'}
                        className={classes.textField}
                        color="secondary"
                    />
                </div>
                <div className={classes.selectContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Disabled
                    </Typography>
                    <TextField
                        variant={'standard'}
                        onChange={handleChange}
                        value={name}
                        label="Name"
                        helperText={'Helper text'}
                        disabled
                        className={classes.textField}
                        color="secondary"
                    />
                </div>
                <div className={classes.selectContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Error
                    </Typography>
                    <TextField
                        variant={'standard'}
                        onChange={handleChange}
                        value={name}
                        label="Name"
                        helperText={'Helper text'}
                        error
                        className={classes.textField}
                        color="secondary"
                    />
                </div>
            </div>
        </>
    );
};
