import { Routes } from '@angular/router';
import { AuthActivateGuard, AuthDeactivateGuard } from './modules/auth/guards/auth.guard';
import { LoggedInGuard } from './modules/auth/guards/loggedIn.guard';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'collectibles',
                pathMatch: 'full',
            },
            {
                path: 'auth',
                loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
                canActivate: [LoggedInGuard],
            },
            {
                path: '',
                canActivate: [AuthActivateGuard],
                canDeactivate: [AuthDeactivateGuard],
                loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
            },
            {
                path: '**',
                redirectTo: 'collectibles',
            },
        ],
    },
];
