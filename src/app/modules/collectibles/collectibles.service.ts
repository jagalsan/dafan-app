import { Injectable } from '@angular/core';
import { Collectible } from './models/collectible.interface';
import { collectiblesResponse } from './mocks/collectibles.response';
import { Observable } from 'rxjs';
import { collectiblesGalleryResponse } from '../market/mocks/collectibles-gallery.response';

@Injectable({ providedIn: 'root' })
export class CollectiblesService {
    constructor() {}

    getCollectibles(): Collectible[] {
        return collectiblesResponse;
    }

    getCollectible(collectibleHashId: string): Observable<Collectible> {
        return new Observable(observer => {
            const collectible = collectiblesGalleryResponse.find(
                collectible => collectible.hashId === collectibleHashId,
            ) as Collectible;

            observer.next(collectible);
        });
    }
}
