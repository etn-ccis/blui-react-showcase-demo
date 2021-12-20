import React from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import { Theme } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Zoom from '@material-ui/core/Zoom';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';

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
