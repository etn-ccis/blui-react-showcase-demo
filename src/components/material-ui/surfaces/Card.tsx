import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import useTheme from '@material-ui/core/styles/useTheme';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        partOfSpeech: {
            marginBottom: theme.spacing(1.5),
        },
        topMargin: {
            marginTop: theme.spacing(2),
        },
        usageSentence: {
            marginTop: theme.spacing(1),
        },
    })
);

export const CardExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    const bullet = <span className={classes.bullet}>•</span>;

    return (
        <div>
            <Card>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5">de{bullet}fault</Typography>
                    <Typography className={classes.partOfSpeech} color="textSecondary">
                        noun
                    </Typography>
                    <Typography variant="body2">
                        a preselected option adopted by a computer program or other mechanism when no alternative is
                        specified by the user or programmer.
                    </Typography>
                    <Typography variant="body2" className={classes.usageSentence}>
                        {'"This is the default variant."'}
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.topMargin} variant={'outlined'}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5">out{bullet}line</Typography>
                    <Typography className={classes.partOfSpeech} color="textSecondary">
                        verb
                    </Typography>
                    <Typography variant="body2">
                        draw, trace, or define the outer edge or shape of (something).
                    </Typography>
                    <Typography variant="body2" className={classes.usageSentence}>
                        {'"This is the outlined variant."'}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};
