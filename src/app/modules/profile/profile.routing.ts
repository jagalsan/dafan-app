import { Routes } from '@angular/router';
import { ProfileComponent } from './containers/profile/profile.component';

export const profileRoutes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        data: {
            isChildView: true,
            childTitle: 'Profile',
        },
    },
];
