import { makeStyles, createStyles, Card, Switch, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles({
        title: { padding: '1rem' },
        content: {
            paddingLeft: '1rem',
            marginBottom: '1rem',
        },
    })
);

export const MaterialSwitchExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles();
    const [switchAChecked, setSwitchAChecked] = useState(false);
    const [switchBChecked, setSwitchBChecked] = useState(true);

    return (
        <Card style={{ marginTop: theme.spacing(1) }}>
            <Typography variant="h6" className={classes.title}>
                Material-UI Switch
            </Typography>
            <div className={classes.content}>
                <Switch
                    checked={switchAChecked}
                    onChange={(): void => setSwitchAChecked(!switchAChecked)}
                    name="checkedA"
                    color="primary"
                />
                <Switch disabled checked={false} color="primary" />
            </div>
            <div className={classes.content}>
                <Switch
                    checked={switchBChecked}
                    onChange={(): void => setSwitchBChecked(!switchBChecked)}
                    name="checkedB"
                    color="primary"
                />
                <Switch disabled checked color="primary" />
            </div>
            <div className={classes.content}>
                <Switch
                    checked={switchAChecked}
                    onChange={(): void => setSwitchAChecked(!switchAChecked)}
                    name="checkedA"
                />
                <Switch disabled checked={false} />
            </div>
            <div className={classes.content}>
                <Switch
                    checked={switchBChecked}
                    onChange={(): void => setSwitchBChecked(!switchBChecked)}
                    name="checkedB"
                />
                <Switch disabled checked />
            </div>
        </Card>
    );
};
