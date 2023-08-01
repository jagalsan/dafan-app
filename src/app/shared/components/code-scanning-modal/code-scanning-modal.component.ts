import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { ModalController } from '@ionic/angular';
import { ChallengesService } from 'src/app/modules/challenges/challenges.service';
import { Challenge } from 'src/app/modules/challenges/models/challenge.interface';

@Component({
    selector: 'df-code-scanning-modal',
    templateUrl: 'code-scanning-modal.component.html',
    styleUrls: ['./code-scanning-modal.component.scss'],
})
export class CodeScanningModalComponent implements OnInit {
    challenge: Challenge;
    codeValidator: string = '';
    enabledValidateButton: boolean;
    scanMethod: 'camera' | 'input' = 'input';
    barcodes: Barcode[] = [];
    barcodeSupported: boolean;

    constructor(
        private modalCtrl: ModalController,
        private challengesService: ChallengesService,
    ) {}

    ngOnInit(): void {
        this.checkBarCodeSupport();
    }

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

    async scanChallenge(): Promise<void> {
        const granted = await this.requestPermissions();
        if (!granted) {
            return;
        }

        const { barcodes } = await BarcodeScanner.scan();
        this.barcodes.push(...barcodes);
    }

    checkBarCodeSupport(): void {
        BarcodeScanner.isSupported()
            .then(result => {
                this.barcodeSupported = result.supported;
                this.scanMethod = 'camera';
                if (!this.barcodeSupported) {
                    this.scanMethod = 'input';
                }
            })
            .catch(() => {
                this.scanMethod = 'input';
                this.barcodeSupported = false;
            });
    }

    async requestPermissions(): Promise<boolean> {
        const { camera } = await BarcodeScanner.requestPermissions();
        return camera === 'granted' || camera === 'limited';
    }
}
