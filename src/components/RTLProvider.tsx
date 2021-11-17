import React, { useEffect } from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import jssPreset from '@material-ui/styles/jssPreset';
import StylesProvider from '@material-ui/styles/StylesProvider';
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
            <ThemeProvider
                theme={createMuiTheme(
                    Object.assign(theme === 'light' ? BLUIThemes.blue : BLUIThemes.blueDark, {
                        direction: dir,
                    })
                )}
            >
                {props.children}
            </ThemeProvider>
        </StylesProvider>
    );
};
