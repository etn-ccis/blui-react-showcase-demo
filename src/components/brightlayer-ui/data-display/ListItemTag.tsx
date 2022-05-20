import React from 'react';
import Typography from '@mui/material/Typography';
import { useTheme, styled } from '@mui/material/styles';
import { InfoListItem, ListItemTag } from '@brightlayer-ui/react-components';
import * as colors from '@brightlayer-ui/colors';
import BrightnessMedium from '@mui/icons-material/BrightnessMedium';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../__types__';
import Box from '@mui/material/Box';

const ExampleRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-evenly',
    marginBottom: theme.spacing(2),
}));

const ComponentContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
}));

const Label = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(1),
}));

export const ListItemTagExample: React.FC = () => {
    const theme = useTheme();
    const direction = useSelector((store: AppStore) => store.app.direction);
    const rtl = direction === 'rtl';

    return (
        <>
            <ExampleRow>
                <ComponentContainer>
                    <Label variant={'body2'}>Basic Usage</Label>
                    <ListItemTag label={'active'} />
                </ComponentContainer>
                <ComponentContainer>
                    <Label variant={'body2'}>w/ Custom Colors</Label>
                    <ListItemTag label={'active'} backgroundColor={colors.red['500']} fontColor={colors.white['50']} />
                </ComponentContainer>
            </ExampleRow>
            <ComponentContainer style={{ marginTop: theme.spacing(6) }}>
                <Label variant={'body2'}>Within an Info List Item</Label>
                <InfoListItem
                    icon={<BrightnessMedium />}
                    title={'Info List Item'}
                    subtitle={'with List Item Tags'}
                    rightComponent={
                        <div style={{ display: 'flex' }}>
                            <ListItemTag
                                label={'Build Passing'}
                                backgroundColor={colors.green[300]}
                                fontColor={colors.black[900]}
                                style={{
                                    marginRight: rtl ? 0 : theme.spacing(2),
                                    marginLeft: rtl ? theme.spacing(2) : 0,
                                }}
                            />
                            <ListItemTag
                                label={'5 Bugs'}
                                backgroundColor={colors.red[300]}
                                fontColor={colors.black[900]}
                            />
                        </div>
                    }
                />
            </ComponentContainer>
        </>
    );
};
