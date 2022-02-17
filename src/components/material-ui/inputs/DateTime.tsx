import React, { ReactElement } from 'react';
import { useTheme, Theme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import MobileTimePicker from '@mui/lab/MobileTimePicker';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        dateTimeContainer: {
            marginBottom: theme.spacing(2),
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
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div className={classes.dateTimeContainer}>
                <DatePicker
                    label="Date picker inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    renderInput={(params): ReactElement => <TextField {...params} />}
                />
            </div>
            <div className={classes.dateTimeContainer}>
                <MobileDatePicker
                    label="Date picker dialog"
                    value={selectedDate}
                    onChange={handleDateChange}
                    renderInput={(params): ReactElement => <TextField {...params} />}
                />
            </div>
            <div className={classes.dateTimeContainer}>
                <MobileTimePicker
                    label="Time picker"
                    value={selectedDate}
                    onChange={handleDateChange}
                    renderInput={(params): ReactElement => <TextField {...params} />}
                />
            </div>
        </LocalizationProvider>
    );
};
