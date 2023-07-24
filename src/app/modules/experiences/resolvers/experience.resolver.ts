import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ExperiencesService } from '../experiences.service';
import { Experience } from '../models/experience.interface';

export const ExperienceResolver: ResolveFn<Observable<Experience | boolean>> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    experiencesService: ExperiencesService = inject(ExperiencesService),
): Observable<Experience | boolean> =>
    experiencesService.getExperience(route.params['id']).pipe(
        catchError(err => {
            return of(false);
        }),
    );
