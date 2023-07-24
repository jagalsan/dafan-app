import { Routes } from '@angular/router';
import { CollectiblesComponent } from './containers/collectibles/collectibles.component';
import { CollectibleComponent } from './containers/collectible/collectible.component';
import { CollectibleResolver } from './resolvers/collectible.resolver';

export const collectiblesRoutes: Routes = [
    {
        path: '',
        component: CollectiblesComponent,
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
