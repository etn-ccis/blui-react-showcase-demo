import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import jssPreset from '@mui/styles/jssPreset';
import StylesProvider from '@mui/styles/StylesProvider';
import { useSelector } from 'react-redux';
import { AppStore } from '../__types__';
import rtl from 'jss-rtl';
import { create } from 'jss';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import type {} from '@mui/material/themeCssVarsAugmentation';
import { blueThemes } from '@brightlayer-ui/react-themes';
document.body.setAttribute('dir', 'rtl');

const jss = create({
    plugins: [...jssPreset().plugins, rtl()],
});

export const RTLThemeProvider = (props: any): JSX.Element => {
    const dir = useSelector((store: AppStore) => store.app.direction);

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
        <ThemeProvider theme={{...blueThemes, direction: dir}} defaultMode="light">
            <CacheProvider value={dir === 'ltr' ? cacheLtr : cacheRtl}>
                <StylesProvider jss={jss}>{props.children}</StylesProvider>
            </CacheProvider>
        </ThemeProvider>
    );
};
