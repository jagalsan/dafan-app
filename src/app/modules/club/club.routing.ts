import { Routes } from '@angular/router';
import { ClubComponent } from './containers/club/club.component';
import { ClubHistoryComponent } from './containers/club-history/club-history.component';
import { ClubStadiumComponent } from './containers/club-stadium/club-stadium.component';

export const clubRoutes: Routes = [
    {
        path: '',
        component: ClubComponent,
    },
    {
        path: 'history',
        component: ClubHistoryComponent,
        data: {
            isChildView: true,
            childTitle: 'History',
        },
    },
    {
        path: 'stadium',
        component: ClubStadiumComponent,
        data: {
            isChildView: true,
            childTitle: 'Stadium',
        },
    },
];
