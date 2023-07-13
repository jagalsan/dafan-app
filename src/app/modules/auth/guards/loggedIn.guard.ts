import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

export const LoggedInGuard: CanActivateFn = () => {
    const navCtrl = inject(NavController);
    const authService = inject(AuthService);

    if (authService.isLoggedIn) {
        navCtrl.navigateRoot('/home');
        return false;
    }

    return true;
};
