import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { collectiblesResponse } from '../collectibles/mocks/collectibles.response';
import { Collectible } from '../collectibles/models/collectible.interface';
import { collectiblesListedResponse } from './mocks/collectibles-listed.response';

@Injectable({ providedIn: 'root' })
export class CollectiblesService {
    constructor() {}

    getCollectibles(): Collectible[] {
        return collectiblesResponse;
    }

    getCollectible(collectibleHashId: string): Observable<Collectible> {
        return new Observable(observer => {
            const collectible = collectiblesResponse.find(
                collectible => collectible.hashId === collectibleHashId,
            ) as Collectible;

            observer.next(collectible);
        });
    }

    getCollectiblesListed(): Collectible[] {
        return collectiblesListedResponse;
    }
}
