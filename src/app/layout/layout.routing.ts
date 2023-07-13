import { Routes } from '@angular/router';
import { LayoutComponent } from './containers/layout/layout.component';

export const mainRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('../modules/home/home.module').then(m => m.HomeModule),
            },
        ],
    },
];
