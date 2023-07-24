import { User } from '../../auth/models/user.interface';

export interface Collectible {
    id: number;
    hashId: string;
    name: string;
    image: string;
    userOwner?: Partial<User>;

    //collectible listed
    price?: number;

    //user collectible
    percentage?: number;
}
