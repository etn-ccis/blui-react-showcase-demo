import React from 'react';
import { ChannelValue, ThreeLiner } from '@brightlayer-ui/react-components';
import TrendingUp from '@mui/icons-material/TrendingUp';
import * as colors from '@brightlayer-ui/colors';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../__types__';

export const ThreeLinerExample: React.FC = () => {
    const direction = useSelector((store: AppStore) => store.app.direction);
    const rtl = direction === 'rtl';

    return (
        <>
            <ThreeLiner title={'Three Liner Component'} subtitle={'with basic usage'} info={'...and a third line'} />
            <ThreeLiner
                sx={{ mt: 4 }}
                title={'Three Liner Component'}
                subtitle={'with custom content'}
                info={
                    <ChannelValue
                        value={'123'}
                        units={'hz'}
                        icon={<TrendingUp htmlColor={colors.red[500]} sx={rtl ? { transform: 'scaleX(-1)' } : {}} />}
                    />
                }
            />
        </>
    );
};
