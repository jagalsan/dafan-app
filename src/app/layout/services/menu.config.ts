import { MenuOption } from '../models/menu-config.interface';

export const menuConfig: MenuOption[] = [
    {
        customIcon: 'df-collectibles',
        path: 'collectibles',
        label: 'Collectibles',
    },
    {
        customIcon: 'df-experiences',
        path: 'experiences',
        label: 'Experiences',
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
];
