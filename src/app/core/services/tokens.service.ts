import { Injectable } from '@angular/core';
import { TokenPackage } from '../models/tokens/token-package.interface';
import { tokenPackagesResponse } from '../mocks/tokens/token-packages.response';

@Injectable({ providedIn: 'root' })
export class TokensService {
    constructor() {}

    getTokenPackages(): TokenPackage[] {
        return tokenPackagesResponse;
    }
}
