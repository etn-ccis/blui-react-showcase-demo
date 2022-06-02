import React from 'react';
import { ChannelValue, InfoListItem } from '@brightlayer-ui/react-components';
import * as colors from '@brightlayer-ui/colors';
import { Alarm } from '@mui/icons-material';
import { Device, GradeA, Leaf, Temp } from '@brightlayer-ui/icons-mui';
import { AppStore } from '../../../__types__';
import { useSelector } from 'react-redux';

export const InfoListItemExample: React.FC = () => {
    const direction = useSelector((store: AppStore) => store.app.direction);
    const rtl = direction === 'rtl';

    return (
        <>
            <InfoListItem title={'Basic Usage'} />
            <InfoListItem title={'Info List Item'} subtitle={'with a Subtitle'} />
            <InfoListItem
                title={'Info List Item'}
                subtitle={'with an icon'}
                icon={<Alarm />}
                iconAlign={'left'}
                iconColor={colors.black[500]}
            />
            <InfoListItem
                title={'With an array for subtitle'}
                subtitle={['Item 1', 'Item 2', 'Item 3']}
                subtitleSeparator={'·'}
                icon={<Temp />}
            />
            <InfoListItem title={'Info List Item'} subtitle={'with a partial divider'} divider={'partial'} />
            <InfoListItem title={'Info List Item'} subtitle={'with a full divider'} divider={'full'} />
            <InfoListItem
                title={'Info List Item'}
                subtitle={'that is clickable'}
                ripple={true}
                onClick={(): void => {}}
            />
            <InfoListItem
                avatar
                title={'Info List Item'}
                subtitle={'with an avatar'}
                statusColor={colors.green[700]}
                icon={<GradeA />}
            />
            <InfoListItem
                title={'Info List Item'}
                subtitle={'with a background color'}
                fontColor={colors.black[500]}
                iconColor={colors.black[500]}
                icon={<Leaf />}
                backgroundColor={colors.yellow[500]}
            />
            <InfoListItem
                title={'Info List Item'}
                subtitle={'with a left component'}
                icon={<Device />}
                leftComponent={
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginRight: !rtl ? 16 : 0,
                            marginLeft: rtl ? 16 : 0,
                        }}
                    >
                        <div>
                            8:32 <strong>AM</strong>
                        </div>
                        <div>11/21/21</div>
                    </div>
                }
            />
            <InfoListItem
                title={'Info List Item'}
                subtitle={'with a right component'}
                icon={<Device />}
                rightComponent={<ChannelValue value={'15'} units={'A'} />}
            />
            <InfoListItem
                title={'Info List Item'}
                subtitle={'with all properties'}
                info={'more info...'}
                icon={<Device />}
                statusColor={colors.blue[500]}
                iconColor={colors.black[500]}
                fontColor={colors.black[500]}
                backgroundColor={colors.black[50]}
                divider={'full'}
                ripple={true}
                onClick={(): void => {}}
            />
        </>
    );
};
