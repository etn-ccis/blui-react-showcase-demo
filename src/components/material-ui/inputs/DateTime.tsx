import React from 'react';
import { useTheme, Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import 'date-fns';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DatePicker from '@mui/lab/DatePicker';
import { ReactElement } from 'react-transition-group/node_modules/@types/react';
import TextField from '@mui/material/TextField';

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

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const handleDateChange = (date: any) => {
        setSelectedDate(date);
    };

    return (
        <LocalizationProvider dateAdapter={DateAdapter}>
            <div className={classes.dateTimeContainer}>
                <DatePicker
                    // disableToolbar
                    // variant="inline"
                    inputFormat="MM/dd/yyyy"
                    // margin="normal"
                    // id="date-picker-inline"
                    label="Date picker inline"
                    value={selectedDate}
                    // eslint-disable-next-line no-console
                    onChange={handleDateChange}
                    renderInput={(props): ReactElement => <TextField {...props} />}
                />
            </div>
            <div className={classes.dateTimeContainer}>
                <DatePicker
                    // margin="normal"
                    // id="date-picker-dialog"
                    label="Date picker dialog"
                    inputFormat="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    renderInput={(props): ReactElement => <TextField {...props} />}
                />
            </div>
            <div className={classes.dateTimeContainer}>
                <TimePicker
                    // margin="normal"
                    // id="time-picker"
                    label="Time picker"
                    value={selectedDate}
                    onChange={handleDateChange}
                    renderInput={(props): ReactElement => <TextField {...props} />}
                />
            </div>
        </LocalizationProvider>
    );
};
