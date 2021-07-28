export type AppStore = {
    app: AppState;
};

export type AppState = {
    theme: 'light' | 'dark';
    direction: 'ltr' | 'rtl';
    drawerOpen: boolean;
    pageTitle: string;
};
