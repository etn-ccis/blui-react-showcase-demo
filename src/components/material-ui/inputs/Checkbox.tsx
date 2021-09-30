import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBox from '@material-ui/icons/CheckBox';
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
