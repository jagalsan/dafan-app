import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
    isLoggedIn: boolean = false;

    constructor() {}

    updateLoggedState(logged: boolean): void {
        this.isLoggedIn = logged;
    }
}
