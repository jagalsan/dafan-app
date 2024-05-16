import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'df-reset-password',
    templateUrl: 'reset-password.component.html',
    styleUrls: ['./reset-password.component.scss', '../../components/auth/auth.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
    resetPasswordForm!: FormGroup<{ email: FormControl<string | null> }>;

    constructor(private toastController: ToastController) {}

    ngOnInit(): void {
        this.createResetPasswordForm();
    }

    resetPassword(): void {
        const toast = this.toastController.create({
            color: 'success',
            message: 'Password reset',
            position: 'top',
            duration: 1500,
            icon: 'checkmark-circle-outline',
            cssClass: 'df-toast',
        });
        toast.then(e => e.present());
    }

    submitResetPasswordForm() {
        if (this.resetPasswordForm.valid) {
            this.resetPassword();
        }
    }

    createResetPasswordForm(): void {
        this.resetPasswordForm = new FormGroup({
            email: new FormControl('', Validators.email),
        });
    }
}
