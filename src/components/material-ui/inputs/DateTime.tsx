import React, { ReactElement } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export const DateTimeExample: React.FC = () => {
    const [value, setValue] = React.useState<Date | null>(null);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="Basic example"
                value={value}
                onChange={(newValue): void => {
                    setValue(newValue);
                }}
                renderInput={(params): ReactElement => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
};
