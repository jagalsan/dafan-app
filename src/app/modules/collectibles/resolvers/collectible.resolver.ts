import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CollectiblesService } from '../collectibles.service';
import { Collectible } from '../models/collectible.interface';

export const CollectibleResolver: ResolveFn<Observable<Collectible | boolean>> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    collectiblesService: CollectiblesService = inject(CollectiblesService),
): Observable<Collectible | boolean> =>
    collectiblesService.getCollectible(route.params['id']).pipe(
        catchError(err => {
            return of(false);
        }),
    );
