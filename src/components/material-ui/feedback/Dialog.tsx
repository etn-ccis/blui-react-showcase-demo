import React from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { TransitionProps } from '@material-ui/core/transitions/transition';
import Close from '@material-ui/icons/Close';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        button: {
            marginBottom: theme.spacing(2),
            width: 300,
        },
        appBar: {
            position: 'relative',
        },
        title: {
            marginLeft: theme.spacing(2.5),
            flex: 1,
        },
    })
);

const Transition = React.forwardRef(
    (props: TransitionProps & { children?: React.ReactElement }, ref: React.Ref<unknown>) => (
        <Slide direction="up" ref={ref} {...props} />
    )
);

export const DialogExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [open, setOpen] = React.useState(false);
    const [fullDialogOpen, setFullDialogOpen] = React.useState(false);

    const handleClickOpen = (): void => {
        setOpen(true);
    };

    const handleClose = (): void => {
        setOpen(false);
    };

    const handleFullDialogClickOpen = (): void => {
        setFullDialogOpen(true);
    };

    const handleFullDialogClose = (): void => {
        setFullDialogOpen(false);
    };

    return (
        <div className={classes.container}>
            <Button variant="outlined" color="primary" onClick={handleClickOpen} className={classes.button}>
                Open Dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{'Is PX Blue Your Favorite Design System?'}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        We assume this is rhetorical, but we wanted to ask anyway. The disagree button is disabled as a
                        feature, not a bug. 😉
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" disabled>
                        Disagree
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
            <Button variant="outlined" color="primary" onClick={handleFullDialogClickOpen} className={classes.button}>
                Open Full Screen Dialog
            </Button>
            <Dialog fullScreen open={fullDialogOpen} onClose={handleFullDialogClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar} color={'primary'}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleFullDialogClose} aria-label="close">
                            <Close />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Select Your Favorite PX Blue Component
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleFullDialogClose}>
                            Save
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem button>
                        <ListItemText
                            primary="AppBar"
                            secondary="An extension of the default AppBar from Material UI that can be resized / collapsed as the page is scrolled"
                        />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText
                            primary="ChannelValue"
                            secondary="A component used to display...a channel value (and units)"
                        />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText
                            primary="EmptyState"
                            secondary="A component that can be used as a placeholder when no data is present"
                        />
                    </ListItem>
                </List>
            </Dialog>
        </div>
    );
};
