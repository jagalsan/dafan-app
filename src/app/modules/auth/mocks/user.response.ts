import { userCollectible } from '../../collectibles/mocks/collectibles.response';
import { User } from '../models/user.interface';

export const userResponse: User = {
    id: 1,
    name: 'Alberto Galera',
    image: 'assets/images/examples/profile-picture.png',
    userCollectible: userCollectible,
    fanPoints: 1200,
    level: 3,
};
