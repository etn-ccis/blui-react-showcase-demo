import React from 'react';
import { useTheme, Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import MuiPickersUtilsProvider from '@material-ui/pickers/MuiPickersUtilsProvider';
import { KeyboardTimePicker } from '@material-ui/pickers/TimePicker';
import { KeyboardDatePicker } from '@material-ui/pickers/DatePicker';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        dateTimeContainer: {
            marginBottom: theme.spacing(1),
        },
    })
);

export const DateTimeExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date('2021-01-24T00:00:00'));

    const handleDateChange = (date: Date | null): void => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className={classes.dateTimeContainer}>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                />
            </div>
            <div className={classes.dateTimeContainer}>
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                />
            </div>
            <div className={classes.dateTimeContainer}>
                <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Time picker"
                    value={selectedDate}
                    onChange={handleDateChange}
                />
            </div>
        </MuiPickersUtilsProvider>
    );
};
