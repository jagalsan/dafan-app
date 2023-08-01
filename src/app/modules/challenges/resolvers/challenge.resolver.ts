import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ChallengesService } from '../challenges.service';
import { Challenge } from '../models/challenge.interface';

export const ChallengeResolver: ResolveFn<Observable<Challenge | boolean>> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    challengesService: ChallengesService = inject(ChallengesService),
): Observable<Challenge | boolean> =>
    challengesService.getChallenge(route.params['id']).pipe(
        catchError(err => {
            return of(false);
        }),
    );
