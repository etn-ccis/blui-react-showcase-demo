import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import CheckBoxOutlineBlank from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBox from '@mui/icons-material/CheckBox';
import React from 'react';

export const CheckboxExample: React.FC = () => {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <FormGroup>
            <FormControlLabel
                control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                label="Secondary"
            />
            <FormControlLabel
                control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" color="primary" />}
                label="Primary"
            />
            <FormControlLabel control={<Checkbox name="checkedC" />} label="Uncontrolled" />
            <FormControlLabel disabled control={<Checkbox name="checkedD" />} label="Disabled" />
            <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Disabled" />
            <FormControlLabel
                control={<Checkbox checked={state.checkedF} onChange={handleChange} name="checkedF" indeterminate />}
                label="Indeterminate"
            />
            <FormControlLabel
                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                label="Custom icon"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        icon={<CheckBoxOutlineBlank fontSize="small" />}
                        checkedIcon={<CheckBox fontSize="small" />}
                        name="checkedI"
                    />
                }
                label="Custom size"
            />
        </FormGroup>
    );
};
