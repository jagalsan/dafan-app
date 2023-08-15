import { User } from '../../auth/models/user.interface';

export interface Collectible {
    id: number;
    hashId: string;
    name: string;
    image: string;
    userOwner?: Partial<User>;
    properties?: CollectibleProperty[];

    //collectible listed
    price?: number;

    //user collectible
    percentage?: number;
}

export interface CollectibleProperty {
    id: number;
    name: string;
    label: string;
    value: string;
}
