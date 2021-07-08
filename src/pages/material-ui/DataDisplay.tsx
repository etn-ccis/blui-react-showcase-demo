import React from 'react';
import {
    ComponentExample,
    AvatarExample,
    BadgeExample,
    ChipExample,
    DividerExample,
    IconExample,
    ListExample,
    TableExample,
    TooltipExample,
    TypographyExample,
    ExampleCardList,
} from '../../components';

export const DataDisplay: React.FC = () => {
    const examples: ComponentExample[] = [
        { label: 'Avatar', component: <AvatarExample /> },
        { label: 'Badge', component: <BadgeExample /> },
        { label: 'Chip', component: <ChipExample /> },
        { label: 'Divider', component: <DividerExample /> },
        { label: 'Icon', component: <IconExample /> },
        { label: 'List', component: <ListExample /> },
        { label: 'Table', component: <TableExample /> },
        { label: 'Tooltip', component: <TooltipExample /> },
        { label: 'Typography', component: <TypographyExample /> },
    ];

    return <ExampleCardList examples={examples} />;
};
