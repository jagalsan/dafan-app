import { Routes } from '@angular/router';
import { ChallengesComponent } from './containers/challenges/challenges.component';
import { ChallengeComponent } from './containers/challenge/challenge.component';
import { ChallengeResolver } from './resolvers/challenge.resolver';
import { FantasyLeagueComponent } from './containers/fantasy-league/fantasy-league.component';

export const challengesRoutes: Routes = [
    {
        path: '',
        component: ChallengesComponent,
    },
    {
        path: 'fantasy-league',
        component: FantasyLeagueComponent,
        data: {
            isChildView: true,
        },
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
