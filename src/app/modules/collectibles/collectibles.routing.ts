import { Routes } from '@angular/router';
import { CollectibleComponent } from './containers/collectible/collectible.component';
import { CollectibleResolver } from './resolvers/collectible.resolver';
import { UserCollectiblesComponent } from './containers/user-collectibles/user-collectibles.component';
import { CollectiblesComponent } from './containers/collectibles/collectibles.component';

export const collectiblesRoutes: Routes = [
    {
        path: '',
        component: UserCollectiblesComponent,
    },
    {
        path: 'gallery',
        component: CollectiblesComponent,
        data: {
            isChildView: true,
            childTitle: 'Gallery',
        },
    },
    {
        path: ':id',
        component: CollectibleComponent,
        resolve: {
            collectible: CollectibleResolver,
        },
        data: {
            isChildView: true,
        },
    },
];
