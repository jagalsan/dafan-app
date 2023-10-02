import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { NavController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class AuthService {
    isLoggedIn: boolean = false;
    userData!: User;

    constructor(private navCtrl: NavController) {}

    updateLoggedState(logged: boolean): void {
        this.isLoggedIn = logged;

        if (logged && !localStorage.getItem('token')) {
            localStorage.setItem('token', 'aaaaa1');
        }
    }

    getUserData(): User {
        return this.userData;
    }

    updateUserData(newUserData: User): void {
        this.userData = newUserData;
    }

    logout(): void {
        this.updateLoggedState(false);
        this.navCtrl.navigateBack('/auth/welcome');
        localStorage.removeItem('token');
    }
}
