import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';

export type ComponentExample = {
    label: string;
    component: JSX.Element;
    fullWidth?: boolean;
};

export type ExampleCardListProps = {
    examples: ComponentExample[];
};

export const ExampleCardList = (props: ExampleCardListProps): JSX.Element => {
    const theme = useTheme();
    const { examples } = props;

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                m: 1,
            }}
        >
            {examples.map((example: ComponentExample) => (
                <Card
                    key={example.label}
                    sx={{
                        m: 1,
                        width: '100%',
                        maxWidth: '416px',
                        minWidth: '350px',
                        [theme.breakpoints.up('md')]: {
                            maxWidth: example.fullWidth ? `${416 * 2 + 16}px` : undefined,
                        },
                    }}
                >
                    <CardHeader title={example.label} />
                    <CardContent>{example.component}</CardContent>
                </Card>
            ))}
        </Box>
    );
};
