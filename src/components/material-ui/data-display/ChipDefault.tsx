import React from 'react';
import { useTheme, Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Favorite from '@mui/icons-material/Favorite';
import BettyWhite from '../../../assets/betty_white.jpeg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginBottom: theme.spacing(4),
        },
        sectionTitle: {
            marginBottom: theme.spacing(2),
        },
        exampleRow: {
            display: 'flex',
            justifyContent: 'space-evenly',
            marginBottom: theme.spacing(2),
        },
        label: {
            marginBottom: theme.spacing(1),
        },
        chipContainer: {
            display: 'flex',
            flexDirection: 'column',
        },
        chipPair: {
            marginBottom: theme.spacing(1),
            '& > *': {
                marginRight: theme.spacing(1),
            },
        },
    })
);

export const DefaultChipExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Default
                </Typography>
                <div className={classes.exampleRow}>
                    <div className={classes.chipContainer}>
                        <div className={classes.chipPair}>
                            <Chip label="Basic" color={'default'} />
                            <Chip label="Disabled" color={'default'} disabled />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip label="Clickable" color={'default'} clickable />
                            <Chip label="Disabled" color={'default'} clickable disabled />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip label="Removable" color={'default'} clickable onDelete={(): void => {}} />
                            <Chip label="Disabled" color={'default'} clickable onDelete={(): void => {}} disabled />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip label="With Icon" color={'default'} clickable icon={<Favorite />} />
                            <Chip label="Disabled" color={'default'} clickable icon={<Favorite />} disabled />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip
                                label="Dual Icon"
                                color={'default'}
                                clickable
                                onDelete={(): void => {}}
                                icon={<Favorite />}
                            />
                            <Chip
                                label="Disabled"
                                color={'default'}
                                clickable
                                onDelete={(): void => {}}
                                icon={<Favorite />}
                                disabled
                            />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip label="Text Avatar" color={'default'} clickable avatar={<Avatar>MB</Avatar>} />
                            <Chip label="Disabled" color={'default'} clickable avatar={<Avatar>MB</Avatar>} disabled />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip
                                label="Image Avatar"
                                color={'default'}
                                clickable
                                avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                            />
                            <Chip
                                label="Disabled"
                                color={'default'}
                                clickable
                                avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                                disabled
                            />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip
                                label="Removable Avatar"
                                color={'default'}
                                clickable
                                avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                                onDelete={(): void => {}}
                            />
                            <Chip
                                label="Disabled"
                                color={'default'}
                                clickable
                                avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                                onDelete={(): void => {}}
                                disabled
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Primary
                </Typography>
                <div className={classes.exampleRow}>
                    <div className={classes.chipContainer}>
                        <div className={classes.chipPair}>
                            <Chip label="Basic" color={'primary'} />
                            <Chip label="Disabled" color={'primary'} disabled />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip label="Clickable" color={'primary'} clickable />
                            <Chip label="Disabled" color={'primary'} clickable disabled />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip label="Removable" color={'primary'} clickable onDelete={(): void => {}} />
                            <Chip label="Disabled" color={'primary'} clickable onDelete={(): void => {}} disabled />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip label="With Icon" color={'primary'} clickable icon={<Favorite />} />
                            <Chip label="Disabled" color={'primary'} clickable icon={<Favorite />} disabled />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip
                                label="Dual Icon"
                                color={'primary'}
                                clickable
                                onDelete={(): void => {}}
                                icon={<Favorite />}
                            />
                            <Chip
                                label="Disabled"
                                color={'primary'}
                                clickable
                                onDelete={(): void => {}}
                                icon={<Favorite />}
                                disabled
                            />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip label="Text Avatar" color={'primary'} clickable avatar={<Avatar>MB</Avatar>} />
                            <Chip label="Disabled" color={'primary'} clickable avatar={<Avatar>MB</Avatar>} disabled />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip
                                label="Image Avatar"
                                color={'primary'}
                                clickable
                                avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                            />
                            <Chip
                                label="Disabled"
                                color={'primary'}
                                clickable
                                avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                                disabled
                            />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip
                                label="Removable Avatar"
                                color={'primary'}
                                clickable
                                avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                                onDelete={(): void => {}}
                            />
                            <Chip
                                label="Disabled"
                                color={'primary'}
                                clickable
                                avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                                onDelete={(): void => {}}
                                disabled
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Secondary
                </Typography>
                <div className={classes.exampleRow}>
                    <div className={classes.chipContainer}>
                        <div className={classes.chipPair}>
                            <Chip label="Basic" color={'secondary'} />
                            <Chip label="Disabled" color={'secondary'} disabled />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip label="Clickable" color={'secondary'} clickable />
                            <Chip label="Disabled" color={'secondary'} clickable disabled />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip label="Removable" color={'secondary'} clickable onDelete={(): void => {}} />
                            <Chip label="Disabled" color={'secondary'} clickable onDelete={(): void => {}} disabled />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip label="With Icon" color={'secondary'} clickable icon={<Favorite />} />
                            <Chip label="Disabled" color={'secondary'} clickable icon={<Favorite />} disabled />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip
                                label="Dual Icon"
                                color={'secondary'}
                                clickable
                                onDelete={(): void => {}}
                                icon={<Favorite />}
                            />
                            <Chip
                                label="Disabled"
                                color={'secondary'}
                                clickable
                                onDelete={(): void => {}}
                                icon={<Favorite />}
                                disabled
                            />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip label="Text Avatar" color={'secondary'} clickable avatar={<Avatar>MB</Avatar>} />
                            <Chip
                                label="Disabled"
                                color={'secondary'}
                                clickable
                                avatar={<Avatar>MB</Avatar>}
                                disabled
                            />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip
                                label="Image Avatar"
                                color={'secondary'}
                                clickable
                                avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                            />
                            <Chip
                                label="Disabled"
                                color={'secondary'}
                                clickable
                                avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                                disabled
                            />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip
                                label="Removable Avatar"
                                color={'secondary'}
                                clickable
                                avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                                onDelete={(): void => {}}
                            />
                            <Chip
                                label="Disabled"
                                color={'secondary'}
                                clickable
                                avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                                onDelete={(): void => {}}
                                disabled
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
