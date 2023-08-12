import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { userResponse } from 'src/app/modules/auth/mocks/user.response';

@Component({
    selector: 'df-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    profileForm!: FormGroup<{
        name: FormControl<string | null>;
        surname: FormControl<string | null>;
        address: FormControl<string | null>;
    }>;

    userData = userResponse;

    constructor(private toastController: ToastController) {}

    ngOnInit(): void {
        this.createProfileForm();
    }

    createProfileForm(): void {
        this.profileForm = new FormGroup({
            name: new FormControl(''),
            surname: new FormControl(''),
            address: new FormControl(''),
        });

        this.profileForm.patchValue(this.userData);
    }

    submitProfileForm(): void {
        const toast = this.toastController.create({
            color: 'success',
            message: 'Profile updated',
            position: 'top',
            duration: 1500,
            icon: 'checkmark-circle-outline',
            cssClass: 'df-toast',
        });
        toast.then(e => e.present());
    }
}
