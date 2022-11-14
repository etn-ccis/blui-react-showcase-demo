import React, { ReactElement } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import DatePicker from '@mui/lab/DatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import MobileTimePicker from '@mui/lab/MobileTimePicker';
import Box from '@mui/material/Box';

const dateTimeContainerStyles = {
    mb: 2,
};

export const DateTimeExample: React.FC = () => {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date('2021-01-24T00:00:00'));

    const handleDateChange = (date: Date | null): void => {
        setSelectedDate(date);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box sx={dateTimeContainerStyles}>
                <DatePicker
                    label="Date picker inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    renderInput={(params: TextFieldProps): ReactElement => <TextField {...params} />}
                />
            </Box>
            <Box sx={dateTimeContainerStyles}>
                <MobileDatePicker
                    label="Date picker dialog"
                    value={selectedDate}
                    onChange={handleDateChange}
                    renderInput={(params: TextFieldProps): ReactElement => <TextField {...params} />}
                />
            </Box>
            <Box sx={dateTimeContainerStyles}>
                <MobileTimePicker
                    label="Time picker"
                    value={selectedDate}
                    onChange={handleDateChange}
                    renderInput={(params: TextFieldProps): ReactElement => <TextField {...params} />}
                />
            </Box>
        </LocalizationProvider>
    );
};
