import { Routes } from '@angular/router';
import { LayoutComponent } from './containers/layout/layout.component';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';

export const mainRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: TabBarComponent,
                children: [
                    {
                        path: 'collectibles',
                        loadChildren: () =>
                            import('../modules/collectibles/collectibles.module').then(m => m.CollectiblesModule),
                    },
                    {
                        path: 'experiences',
                        loadChildren: () =>
                            import('../modules/experiences/experiences.module').then(m => m.ExperiencesModule),
                    },
                    {
                        path: 'market',
                        loadChildren: () => import('../modules/market/market.module').then(m => m.MarketModule),
                    },
                    {
                        path: 'challenges',
                        loadChildren: () =>
                            import('../modules/challenges/challenges.module').then(m => m.ChallengesModule),
                    },
                    {
                        path: 'club',
                        loadChildren: () =>
                            import('../modules/challenges/challenges.module').then(m => m.ChallengesModule),
                    },
                ],
            },
        ],
    },
];
