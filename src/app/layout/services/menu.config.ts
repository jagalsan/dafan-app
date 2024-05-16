import { MenuOption } from '../models/menu-config.interface';

export const menuConfig: MenuOption[] = [
    {
        customIcon: 'df-collectibles',
        path: 'collectibles',
        label: 'Collect',
    },
    {
        icon: 'checkmark-circle-outline',
        path: 'challenges',
        label: 'Challenges',
    },
    {
        customIcon: 'df-experiences',
        path: 'experiences',
        label: 'Exp',
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
