import { Collectible } from '../../collectibles/models/collectible.interface';

export interface User {
    id: number;
    name: string;
    image: string;
    userCollectible?: Collectible;
    fanPoints: number;
    level: number;
    surname?: string;
    address?: string;
}
