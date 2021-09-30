import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import useTheme from '@material-ui/core/styles/useTheme';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
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
        formControl: {
            width: '100%',
        },
    })
);

export const StandardSelectExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [age, setAge] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>): void => {
        setAge(event.target.value as string);
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
                    <FormControl variant={'standard'} className={classes.formControl}>
                        <InputLabel>Label</InputLabel>
                        <Select value={age} onChange={handleChange}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Helper text</FormHelperText>
                    </FormControl>
                </div>
                <div className={classes.selectContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Disabled
                    </Typography>
                    <FormControl variant={'standard'} disabled className={classes.formControl}>
                        <InputLabel>Label</InputLabel>
                        <Select value={age}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Helper text</FormHelperText>
                    </FormControl>
                </div>
                <div className={classes.selectContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Error
                    </Typography>
                    <FormControl variant={'standard'} className={classes.formControl} error>
                        <InputLabel>Label</InputLabel>
                        <Select value={age} onChange={handleChange}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Error text</FormHelperText>
                    </FormControl>
                </div>
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Primary
                </Typography>
                <div className={classes.selectContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Enabled
                    </Typography>
                    <FormControl variant={'standard'} className={classes.formControl} color="primary">
                        <InputLabel>Label</InputLabel>
                        <Select value={age} onChange={handleChange}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Helper text</FormHelperText>
                    </FormControl>
                </div>
                <div className={classes.selectContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Disabled
                    </Typography>
                    <FormControl variant={'standard'} disabled className={classes.formControl} color="primary">
                        <InputLabel>Label</InputLabel>
                        <Select value={age}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Helper text</FormHelperText>
                    </FormControl>
                </div>
                <div className={classes.selectContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Error
                    </Typography>
                    <FormControl variant={'standard'} className={classes.formControl} error color="primary">
                        <InputLabel>Label</InputLabel>
                        <Select value={age} onChange={handleChange}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Error text</FormHelperText>
                    </FormControl>
                </div>
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Secondary
                </Typography>
                <div className={classes.selectContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Enabled
                    </Typography>
                    <FormControl variant={'standard'} className={classes.formControl} color="secondary">
                        <InputLabel>Label</InputLabel>
                        <Select value={age} onChange={handleChange}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Helper text</FormHelperText>
                    </FormControl>
                </div>
                <div className={classes.selectContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Disabled
                    </Typography>
                    <FormControl variant={'standard'} disabled className={classes.formControl} color="secondary">
                        <InputLabel>Label</InputLabel>
                        <Select value={age}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Helper text</FormHelperText>
                    </FormControl>
                </div>
                <div className={classes.selectContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Error
                    </Typography>
                    <FormControl variant={'standard'} className={classes.formControl} error color="secondary">
                        <InputLabel>Label</InputLabel>
                        <Select value={age} onChange={handleChange}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Error text</FormHelperText>
                    </FormControl>
                </div>
            </div>
        </>
    );
};
