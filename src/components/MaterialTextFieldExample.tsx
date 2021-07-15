import { makeStyles, createStyles, Card, Typography, TextField, InputProps } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles({
        title: { padding: '1rem' },
        content: {
            paddingLeft: '1rem',
            marginBottom: '1rem',
            display: 'flex',
            flexDirection: 'column',
        },
        inputField: {
            width: '350px',
            marginBottom: '2rem',
        },
    })
);

type FormError = undefined | null | string;
type OnChangeHandler = InputProps['onChange'];

export const MaterialTextFieldExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles();
    const emailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState<FormError>(null);

    const validateEmail = useCallback(
        (value: string): void => {
            const tempEmail = value;
            let tempEmailError = '';
            if (!tempEmail.trim()) {
                tempEmailError = 'required';
            } else if (!emailRegex.test(tempEmail)) {
                tempEmailError = 'Invalid email address';
            }
            setEmailError(tempEmailError);
        },
        [setEmailError]
    );

    const onEmailChange: OnChangeHandler = useCallback(
        (event: any) => {
            setEmail(event.target.value);
            if (emailError) {
                validateEmail(event.target.value);
            } else {
                setEmailError(null);
            }
        },
        [setEmail, emailError, validateEmail, setEmailError]
    );

    const onEmailBlur = useCallback((): void => {
        validateEmail(email);
    }, [validateEmail, email]);

    return (
        <Card style={{ marginTop: theme.spacing(1) }}>
            <Typography variant="h6" className={classes.title}>
                Material-UI TextField
            </Typography>
            <div className={classes.content}>
                <TextField
                    className={classes.inputField}
                    id={'email1'}
                    label={'Enter Your Email'}
                    helperText={emailError || ''}
                    required
                    value={email}
                    error={Boolean(emailError)}
                    onChange={onEmailChange}
                    onBlur={onEmailBlur}
                    variant={'filled'}
                />

                <TextField
                    className={classes.inputField}
                    id={'email2'}
                    label={'Enter Your Email'}
                    helperText={emailError || ''}
                    required
                    value={email}
                    error={Boolean(emailError)}
                    onChange={onEmailChange}
                    onBlur={onEmailBlur}
                    variant={'outlined'}
                />

                <TextField
                    className={classes.inputField}
                    id={'email3'}
                    label={'Enter Your Email'}
                    helperText={emailError || ''}
                    required
                    value={email}
                    error={Boolean(emailError)}
                    onChange={onEmailChange}
                    onBlur={onEmailBlur}
                    variant={'standard'}
                />
            </div>
        </Card>
    );
};
