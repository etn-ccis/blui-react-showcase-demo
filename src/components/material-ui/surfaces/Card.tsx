import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

const titleStyles = {
    fontSize: 14,
};

const partOfSpeechStyles = {
    mb: 1.5,
};

const usageSentenceStyles = {
    mt: 1,
};

export const CardExample: React.FC = () => {
    const bullet = (
        <Box
            component="span"
            sx={{
                display: 'inline-block',
                m: '0 2px',
                transform: 'scale(0.8)',
            }}
        >
            •
        </Box>
    );

    return (
        <div>
            <Card>
                <CardContent>
                    <Typography sx={titleStyles} color="textSecondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5">de{bullet}fault</Typography>
                    <Typography sx={partOfSpeechStyles} color="textSecondary">
                        noun
                    </Typography>
                    <Typography variant="body2">
                        a preselected option adopted by a computer program or other mechanism when no alternative is
                        specified by the user or programmer.
                    </Typography>
                    <Typography variant="body2" sx={usageSentenceStyles}>
                        {'"This is the default variant."'}
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ mt: 2 }} variant={'outlined'}>
                <CardContent>
                    <Typography sx={titleStyles} color="textSecondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5">out{bullet}line</Typography>
                    <Typography sx={partOfSpeechStyles} color="textSecondary">
                        verb
                    </Typography>
                    <Typography variant="body2">
                        draw, trace, or define the outer edge or shape of (something).
                    </Typography>
                    <Typography variant="body2" sx={usageSentenceStyles}>
                        {'"This is the outlined variant."'}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};
