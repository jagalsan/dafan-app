import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';

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

    updateUserData(newUserData: User): void {
        this.userData = newUserData;
    }
}
