import React from 'react';
import { useTheme, Theme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import Slide from '@mui/material/Slide';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { TransitionProps } from '@mui/material/transitions/transition';
import Close from '@mui/icons-material/Close';

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
    (props: TransitionProps & { children: React.ReactElement<any, any> }, ref: React.Ref<unknown>) => (
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
                <DialogTitle>{'Is Brightlayer UI Your Favorite Design System?'}</DialogTitle>
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
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleFullDialogClose}
                            aria-label="close"
                            size="large"
                        >
                            <Close />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Select Your Favorite Brightlayer UI Component
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
