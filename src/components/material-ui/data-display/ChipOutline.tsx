import React from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import { Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Favorite from '@material-ui/icons/Favorite';
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

export const OutlineChipExample: React.FC = () => {
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
                            <Chip variant={'outlined'} label="Basic" color={'default'} />
                            <Chip variant={'outlined'} label="Disabled" color={'default'} disabled />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip variant={'outlined'} label="Clickable" color={'default'} clickable />
                            <Chip variant={'outlined'} label="Disabled" color={'default'} clickable disabled />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip
                                variant={'outlined'}
                                label="Removable"
                                color={'default'}
                                clickable
                                onDelete={(): void => {}}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'default'}
                                clickable
                                onDelete={(): void => {}}
                                disabled
                            />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip
                                variant={'outlined'}
                                label="With Icon"
                                color={'default'}
                                clickable
                                icon={<Favorite />}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'default'}
                                clickable
                                icon={<Favorite />}
                                disabled
                            />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip
                                variant={'outlined'}
                                label="Dual Icon"
                                color={'default'}
                                clickable
                                onDelete={(): void => {}}
                                icon={<Favorite />}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'default'}
                                clickable
                                onDelete={(): void => {}}
                                icon={<Favorite />}
                                disabled
                            />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip
                                variant={'outlined'}
                                label="Text Avatar"
                                color={'default'}
                                clickable
                                avatar={<Avatar>MB</Avatar>}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'default'}
                                clickable
                                avatar={<Avatar>MB</Avatar>}
                                disabled
                            />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip
                                variant={'outlined'}
                                label="Image Avatar"
                                color={'default'}
                                clickable
                                avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'default'}
                                clickable
                                avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                                disabled
                            />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip
                                variant={'outlined'}
                                label="Removable Avatar"
                                color={'default'}
                                clickable
                                avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                                onDelete={(): void => {}}
                            />
                            <Chip
                                variant={'outlined'}
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
                            <Chip variant={'outlined'} label="Basic" color={'primary'} />
                            <Chip variant={'outlined'} label="Disabled" color={'primary'} disabled />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip variant={'outlined'} label="Clickable" color={'primary'} clickable />
                            <Chip variant={'outlined'} label="Disabled" color={'primary'} clickable disabled />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip
                                variant={'outlined'}
                                label="Removable"
                                color={'primary'}
                                clickable
                                onDelete={(): void => {}}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'primary'}
                                clickable
                                onDelete={(): void => {}}
                                disabled
                            />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip
                                variant={'outlined'}
                                label="With Icon"
                                color={'primary'}
                                clickable
                                icon={<Favorite />}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'primary'}
                                clickable
                                icon={<Favorite />}
                                disabled
                            />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip
                                variant={'outlined'}
                                label="Dual Icon"
                                color={'primary'}
                                clickable
                                onDelete={(): void => {}}
                                icon={<Favorite />}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'primary'}
                                clickable
                                onDelete={(): void => {}}
                                icon={<Favorite />}
                                disabled
                            />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip
                                variant={'outlined'}
                                label="Text Avatar"
                                color={'primary'}
                                clickable
                                avatar={<Avatar>MB</Avatar>}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'primary'}
                                clickable
                                avatar={<Avatar>MB</Avatar>}
                                disabled
                            />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip
                                variant={'outlined'}
                                label="Image Avatar"
                                color={'primary'}
                                clickable
                                avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'primary'}
                                clickable
                                avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                                disabled
                            />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip
                                variant={'outlined'}
                                label="Removable Avatar"
                                color={'primary'}
                                clickable
                                avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                                onDelete={(): void => {}}
                            />
                            <Chip
                                variant={'outlined'}
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
                            <Chip variant={'outlined'} label="Basic" color={'secondary'} />
                            <Chip variant={'outlined'} label="Disabled" color={'secondary'} disabled />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip variant={'outlined'} label="Clickable" color={'secondary'} clickable />
                            <Chip variant={'outlined'} label="Disabled" color={'secondary'} clickable disabled />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip
                                variant={'outlined'}
                                label="Removable"
                                color={'secondary'}
                                clickable
                                onDelete={(): void => {}}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'secondary'}
                                clickable
                                onDelete={(): void => {}}
                                disabled
                            />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip
                                variant={'outlined'}
                                label="With Icon"
                                color={'secondary'}
                                clickable
                                icon={<Favorite />}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'secondary'}
                                clickable
                                icon={<Favorite />}
                                disabled
                            />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip
                                variant={'outlined'}
                                label="Dual Icon"
                                color={'secondary'}
                                clickable
                                onDelete={(): void => {}}
                                icon={<Favorite />}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'secondary'}
                                clickable
                                onDelete={(): void => {}}
                                icon={<Favorite />}
                                disabled
                            />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip
                                variant={'outlined'}
                                label="Text Avatar"
                                color={'secondary'}
                                clickable
                                avatar={<Avatar>MB</Avatar>}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'secondary'}
                                clickable
                                avatar={<Avatar>MB</Avatar>}
                                disabled
                            />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip
                                variant={'outlined'}
                                label="Image Avatar"
                                color={'secondary'}
                                clickable
                                avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'secondary'}
                                clickable
                                avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                                disabled
                            />
                        </div>
                        <div className={classes.chipPair}>
                            <Chip
                                variant={'outlined'}
                                label="Removable Avatar"
                                color={'secondary'}
                                clickable
                                avatar={<Avatar alt="BettyWhite" src={BettyWhite} />}
                                onDelete={(): void => {}}
                            />
                            <Chip
                                variant={'outlined'}
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
