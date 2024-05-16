import { Routes } from '@angular/router';
import { ExperiencesComponent } from './containers/experiences/experiences.component';
import { ExperienceComponent } from './containers/experience/experience.component';
import { ExperienceResolver } from './resolvers/experience.resolver';

export const experiencesRoutes: Routes = [
    {
        path: '',
        component: ExperiencesComponent,
    },
    {
        path: ':id',
        component: ExperienceComponent,
        resolve: {
            experience: ExperienceResolver,
        },
        data: {
            isChildView: true,
        },
    },
];
