import React, { useEffect } from 'react';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
// import ThemeProvider from '@mui/styles/ThemeProvider';
import jssPreset from '@mui/styles/jssPreset';
import StylesProvider from '@mui/styles/StylesProvider';
import * as BLUIThemes from '@brightlayer-ui/react-themes';
import { useSelector } from 'react-redux';
import { AppStore } from '../__types__';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export const RTLThemeProvider: React.FC = (props) => {
    const dir = useSelector((store: AppStore) => store.app.direction);
    const theme = useSelector((store: AppStore) => store.app.theme);

    useEffect(() => {
        document.body.dir = dir;
    }, [dir]);

    return (
        <StylesProvider jss={jss}>
            <StyledEngineProvider injectFirst>
                <ThemeProvider
                    theme={createTheme(
                            Object.assign(theme === 'light' ? BLUIThemes.blue : BLUIThemes.blueDark, {
                                direction: dir,
                            })
                    )}
                >
                    {props.children}
                </ThemeProvider>
            </StyledEngineProvider>
        </StylesProvider>
    );
};
