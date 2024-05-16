import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

export const LoggedInGuard: CanActivateFn = () => {
    const navCtrl = inject(NavController);
    const authService = inject(AuthService);

    if (authService.isLoggedIn || localStorage.getItem('token')) {
        authService.updateLoggedState(true);
        navCtrl.navigateRoot('/collectibles');
        return false;
    }

    return true;
};
