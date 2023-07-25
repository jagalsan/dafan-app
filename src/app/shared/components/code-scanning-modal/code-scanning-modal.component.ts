import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChallengesService } from 'src/app/modules/challenges/challenges.service';
import { Challenge } from 'src/app/modules/challenges/models/challenge.interface';

@Component({
    selector: 'df-code-scanning-modal',
    templateUrl: 'code-scanning-modal.component.html',
    styleUrls: ['./code-scanning-modal.component.scss'],
})
export class CodeScanningModalComponent {
    challenge: Challenge;
    codeValidator: string = '';
    enabledValidateButton: boolean;
    scanMethod: 'camera' | 'input' = 'camera';

    constructor(
        private modalCtrl: ModalController,
        private challengesService: ChallengesService,
    ) {}

    close(): void {
        this.modalCtrl.dismiss();
    }

    validateCode(): void {
        this.challengesService.validateChallengeCode(this.challenge, this.codeValidator);
    }

    checkValidateButtonState(): void {
        if (this.codeValidator.length) {
            this.enabledValidateButton = true;
        } else {
            this.enabledValidateButton = false;
        }
    }

    changeScanMethod(method: 'camera' | 'input'): void {
        this.scanMethod = method;
        this.codeValidator = '';
    }
}
