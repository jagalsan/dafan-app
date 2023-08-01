import { Routes } from '@angular/router';
import { ChallengesComponent } from './containers/challenges/challenges.component';
import { ChallengeComponent } from './containers/challenge/challenge.component';
import { ChallengeResolver } from './resolvers/challenge.resolver';

export const challengesRoutes: Routes = [
    {
        path: '',
        component: ChallengesComponent,
    },
    {
        path: ':id',
        component: ChallengeComponent,
        resolve: { challenge: ChallengeResolver },
        data: {
            isChildView: true,
        },
    },
];
