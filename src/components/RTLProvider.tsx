import React, { useEffect } from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset, ThemeProvider, createTheme } from '@material-ui/core/styles';
import * as PXBThemes from '@pxblue/react-themes';
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
            <ThemeProvider
                theme={createTheme(
                    Object.assign(theme === 'light' ? PXBThemes.blue : PXBThemes.blueDark, {
                        direction: dir,
                    })
                )}
            >
                {props.children}
            </ThemeProvider>
        </StylesProvider>
    );
};
