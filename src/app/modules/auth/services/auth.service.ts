import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { userResponse } from '../mocks/user.response';

@Injectable({ providedIn: 'root' })
export class AuthService {
    isLoggedIn: boolean = false;
    userData!: User;

    constructor() {}

    updateLoggedState(logged: boolean): void {
        this.isLoggedIn = logged;
    }

    getUserData(): User {
        return this.userData;
    }

    updateUserData(): void {
        this.userData = userResponse;
    }
}
