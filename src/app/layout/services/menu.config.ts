import { MenuOption } from '../models/menu-config.interface';

export const menuConfig: MenuOption[] = [
    {
        icon: 'home-outline',
        path: 'home',
        label: 'Home',
    },
    {
        icon: 'person-outline',
        path: 'profile',
        label: 'Profile',
    },
    {
        icon: 'pricetags-outline',
        path: 'tickets',
        label: 'Tickets',
    },
    {
        icon: 'cube-outline',
        path: 'collectibles',
        label: 'Collectibles',
    },
    {
        icon: 'cart-outline',
        path: 'market',
        label: 'Marketplace',
    },
];
