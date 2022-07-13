import React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';

const containerStyles = {
    mb: 4,
};

const sectionTitleStyles = {
    mb: 2,
};

type TabPanelProps = {
    children?: React.ReactNode;
    index: any;
    value: any;
};

const TabPanel = (props: TabPanelProps): JSX.Element => {
    const { children, value, index, ...other } = props;

    return (
        <Box role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} {...other}>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Box>
    );
};

export const TabsExample: React.FC = () => {
    const [standardValue, setStandardValue] = React.useState(0);
    const [fullWidthValue, setFullWidthValue] = React.useState(0);
    const [scrollableValue, setScrollableValue] = React.useState(0);

    const handleStandardChange = (event: React.SyntheticEvent, newValue: number): void => {
        setStandardValue(newValue);
    };

    const handleFullWidthChange = (event: React.SyntheticEvent, newValue: number): void => {
        setFullWidthValue(newValue);
    };

    const handleScrollableChange = (event: React.SyntheticEvent, newValue: number): void => {
        setScrollableValue(newValue);
    };

    return (
        <>
            <Box sx={containerStyles}>
                <Typography variant={'body1'} sx={sectionTitleStyles}>
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
            </Box>
            <Box sx={containerStyles}>
                <Typography variant={'body1'} sx={sectionTitleStyles}>
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
            </Box>
            <Box sx={containerStyles}>
                <Typography variant={'body1'} sx={sectionTitleStyles}>
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
            </Box>
        </>
    );
};
