import React, { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as BLUIThemes from '@brightlayer-ui/react-themes';
import { useSelector } from 'react-redux';
import { AppStore } from '../__types__';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import StyledEngineProvider from '@mui/styled-engine-sc/StyledEngineProvider';

document.body.setAttribute('dir', 'rtl');

export const RTLThemeProvider = (props: any): JSX.Element => {
    const dir = useSelector((store: AppStore) => store.app.direction);
    const theme = useSelector((store: AppStore) => store.app.theme);

    const cacheRtl = createCache({
        key: dir === 'rtl' ? 'cssrtl' : 'cssltr',
        prepend: true,
        stylisPlugins: [rtlPlugin],
    });

    const cacheLtr = createCache({
        key: dir === 'ltr' ? 'cssltr' : 'cssrtl',
        prepend: true,
        stylisPlugins: dir === 'ltr' ? undefined : [rtlPlugin],
    });

    useEffect(() => {
        document.body.dir = dir;
    }, [dir]);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider
                theme={createTheme(
                    Object.assign(theme === 'light' ? BLUIThemes.blue : BLUIThemes.blueDark, {
                        direction: dir,
                    })
                )}
            >
                <CacheProvider value={dir === 'ltr' ? cacheLtr : cacheRtl}>{props.children}</CacheProvider>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};
