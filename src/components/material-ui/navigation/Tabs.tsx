import React from 'react';
import { useTheme, Theme, Typography, AppBar, Tab, Tabs, Box } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginBottom: theme.spacing(4),
        },
        sectionTitle: {
            marginBottom: theme.spacing(2),
        },
    })
);

type TabPanelProps = {
    children?: React.ReactNode;
    index: any;
    value: any;
};

const TabPanel = (props: TabPanelProps): JSX.Element => {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} {...other}>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

export const TabsExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [standardValue, setStandardValue] = React.useState(0);
    const [fullWidthValue, setFullWidthValue] = React.useState(0);
    const [scrollableValue, setScrollableValue] = React.useState(0);

    const handleStandardChange = (event: React.ChangeEvent<Record<string, unknown>>, newValue: number): void => {
        setStandardValue(newValue);
    };

    const handleFullWidthChange = (event: React.ChangeEvent<Record<string, unknown>>, newValue: number): void => {
        setFullWidthValue(newValue);
    };

    const handleScrollableChange = (event: React.ChangeEvent<Record<string, unknown>>, newValue: number): void => {
        setScrollableValue(newValue);
    };

    return (
        <>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Standard Tabs
                </Typography>
                <AppBar position="static">
                    <Tabs value={standardValue} onChange={handleStandardChange}>
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                    </Tabs>
                </AppBar>
                <TabPanel value={standardValue} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={standardValue} index={1}>
                    Item Two
                </TabPanel>
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Full Width Tabs
                </Typography>
                <AppBar position="static">
                    <Tabs value={fullWidthValue} onChange={handleFullWidthChange} variant={'fullWidth'}>
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                    </Tabs>
                </AppBar>
                <TabPanel value={fullWidthValue} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={fullWidthValue} index={1}>
                    Item Two
                </TabPanel>
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Scrollable Tabs
                </Typography>
                <AppBar position="static">
                    <Tabs value={scrollableValue} onChange={handleScrollableChange} variant={'scrollable'}>
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                        <Tab label="Item Four" />
                    </Tabs>
                </AppBar>
                <TabPanel value={scrollableValue} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={scrollableValue} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={scrollableValue} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={scrollableValue} index={3}>
                    Item Four
                </TabPanel>
            </div>
        </>
    );
};
