import React from 'react';
import Typography from '@mui/material/Typography';
import { InfoListItem, ListItemTag } from '@brightlayer-ui/react-components';
import * as colors from '@brightlayer-ui/colors';
import BrightnessMedium from '@mui/icons-material/BrightnessMedium';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../__types__';
import Box from '@mui/material/Box';

const componentContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
};

const labelStyles = {
    mb: 1,
};

export const ListItemTagExample: React.FC = () => {
    const direction = useSelector((store: AppStore) => store.app.direction);
    const rtl = direction === 'rtl';

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    mb: 2,
                }}
            >
                <Box sx={componentContainerStyles}>
                    <Typography sx={labelStyles} variant={'body2'}>
                        Basic Usage
                    </Typography>
                    <ListItemTag label={'active'} />
                </Box>
                <Box sx={componentContainerStyles}>
                    <Typography sx={labelStyles} variant={'body2'}>
                        w/ Custom Colors
                    </Typography>
                    <ListItemTag label={'active'} backgroundColor={colors.red['500']} fontColor={colors.white['50']} />
                </Box>
            </Box>
            <Box sx={{ ...componentContainerStyles, mt: 6 }}>
                <Typography sx={labelStyles} variant={'body2'}>
                    Within an Info List Item
                </Typography>
                <InfoListItem
                    icon={<BrightnessMedium />}
                    title={'Info List Item'}
                    subtitle={'with List Item Tags'}
                    rightComponent={
                        <Box sx={{ display: 'flex' }}>
                            <ListItemTag
                                label={'Build Passing'}
                                backgroundColor={colors.green[300]}
                                fontColor={colors.black[900]}
                                sx={{
                                    mr: rtl ? 0 : 2,
                                    ml: rtl ? 2 : 0,
                                }}
                            />
                            <ListItemTag
                                label={'5 Bugs'}
                                backgroundColor={colors.red[300]}
                                fontColor={colors.black[900]}
                            />
                        </Box>
                    }
                />
            </Box>
        </>
    );
};
