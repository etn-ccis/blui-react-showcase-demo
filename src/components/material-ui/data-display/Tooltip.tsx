import React from 'react';
import { useTheme, Theme, Tooltip, Button, Fade, Zoom } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginBottom: theme.spacing(4),
        },
        exampleRow: {
            display: 'flex',
            justifyContent: 'space-evenly',
            marginBottom: theme.spacing(2),
        },
        tooltipContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1,
        },
    })
);

export const TooltipExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.container}>
            <div className={classes.exampleRow}>
                <div className={classes.tooltipContainer}>
                    <Tooltip title="I'm a default tooltip">
                        <Button variant="outlined">Default</Button>
                    </Tooltip>
                </div>
                <div className={classes.tooltipContainer}>
                    <Tooltip title="I'm an arrow tooltip" arrow>
                        <Button variant="outlined">Arrow</Button>
                    </Tooltip>
                </div>
                <div className={classes.tooltipContainer}>
                    <Tooltip
                        title="I'm a tooltip with a fade animation"
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                    >
                        <Button variant="outlined">Fade</Button>
                    </Tooltip>
                </div>
                <div className={classes.tooltipContainer}>
                    <Tooltip title="I'm a tooltip with a zoom animation" TransitionComponent={Zoom}>
                        <Button variant="outlined">Zoom</Button>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};
