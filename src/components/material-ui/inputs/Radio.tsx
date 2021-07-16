import { FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import React from 'react';

export const RadioExample: React.FC = () => {
    const [value, setValue] = React.useState('default');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue((event.target as HTMLInputElement).value);
    };

    return (
        <FormControl component="fieldset">
            <RadioGroup name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="default" control={<Radio />} label="Default" />
                <FormControlLabel value="primary" control={<Radio color="primary" />} label="Primary" />
                <FormControlLabel value="secondary" control={<Radio color="secondary" />} label="Secondary" />
                <FormControlLabel value="disabled" disabled control={<Radio />} label="Disabled" />
            </RadioGroup>
            <FormControlLabel
                value="disabledPrimary"
                control={<Radio checked color="primary" />}
                label="Disabled Primary"
                disabled
            />
            <FormControlLabel
                value="disabledSecondary"
                control={<Radio checked color="secondary" />}
                label="Disabled Secondary"
                disabled
            />
        </FormControl>
    );
};
