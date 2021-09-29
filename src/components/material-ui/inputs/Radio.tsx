import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

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
