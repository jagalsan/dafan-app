import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'df-welcome',
    templateUrl: 'welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
    constructor(private navCtrl: NavController) {}

    navigateToRegister(): void {
        this.navCtrl.navigateForward('/auth/register');
    }

    navigateToLogin(): void {
        this.navCtrl.navigateForward('/auth/login');
    }
}
