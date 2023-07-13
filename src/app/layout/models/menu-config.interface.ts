export interface MenuOption {
    label: string;
    path: string;
    icon?: string;
    children?: MenuOption[];
}
