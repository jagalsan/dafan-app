import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TokenPackage } from 'src/app/core/models/tokens/token-package.interface';
import { User } from 'src/app/modules/auth/models/user.interface';

@Component({
    selector: 'df-fan-tokens-modal',
    templateUrl: 'fan-tokens-modal.component.html',
    styleUrls: ['./fan-tokens-modal.component.scss'],
})
export class FanTokensModalComponent {
    userData: User;
    tokenPackages: TokenPackage[];

    constructor(private modalCtrl: ModalController) {}

    close(): void {
        this.modalCtrl.dismiss();
    }
}
