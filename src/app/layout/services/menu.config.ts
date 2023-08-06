import { MenuOption } from '../models/menu-config.interface';

export const menuConfig: MenuOption[] = [
    {
        customIcon: 'df-collectibles',
        path: 'collectibles',
        label: 'Collect',
    },
    {
        customIcon: 'df-experiences',
        path: 'experiences',
        label: 'Exp',
    },
    {
        icon: 'checkmark-circle-outline',
        path: 'challenges',
        label: 'Challenges',
    },
    {
        icon: 'search-outline',
        path: 'market',
        label: 'Market',
    },
    {
        path: 'club',
        label: 'Club',
        customIcon: 'club-logo',
    },
];
