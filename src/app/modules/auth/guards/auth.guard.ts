import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CanDeactivateFn } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export const AuthActivateGuard: CanActivateFn = () => {
    const navCtrl = inject(NavController);
    const authService = inject(AuthService);

    if (authService.isLoggedIn) {
        authService.updateUserData();
        return true;
    }

    navCtrl.navigateRoot('/auth/login');

    return false;
};

export const AuthDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = () => {
    return true;
};
