import React from 'react';
import {
    BackdropExample,
    CircularProgressExample,
    ComponentExample,
    DialogExample,
    ExampleCardList,
    LinearProgressExample,
    SnackbarExample,
} from '../../components';

export const Feedback: React.FC = () => {
    const examples: ComponentExample[] = [
        { label: 'Circular Progress', component: <CircularProgressExample /> },
        { label: 'Linear Progress', component: <LinearProgressExample /> },
        { label: 'Dialog', component: <DialogExample /> },
        { label: 'Snackbar', component: <SnackbarExample /> },
        { label: 'Backdrop', component: <BackdropExample /> },
    ];

    return <ExampleCardList examples={examples} />;
};
