import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme, Theme } from '@mui/material/styles';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

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
