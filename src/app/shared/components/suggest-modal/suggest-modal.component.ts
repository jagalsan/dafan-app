import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'df-suggest-modal',
    templateUrl: 'suggest-modal.component.html',
    styleUrls: ['./suggest-modal.component.scss'],
})
export class SuggestModalComponent implements OnInit {
    suggestForm: FormGroup<{ suggest: FormControl<string | null> }>;

    constructor(private modalCtrl: ModalController) {}

    ngOnInit(): void {
        this.createSuggestForm();
    }

    createSuggestForm(): void {
        this.suggestForm = new FormGroup({
            suggest: new FormControl('', Validators.required),
        });
    }

    submitSuggestForm(): void {
        this.suggestForm.markAllAsTouched();
        this.suggestForm.markAsPristine();

        if (this.suggestForm.valid) {
            this.sendSuggest();
        }
    }

    sendSuggest(): void {
        this.modalCtrl.dismiss({ action: 'sendSuggest', formData: this.suggestForm.value });
    }

    close(): void {
        this.modalCtrl.dismiss();
    }
}
