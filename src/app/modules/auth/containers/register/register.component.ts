import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'df-register',
    templateUrl: 'register.component.html',
    styleUrls: ['./register.component.scss', '../../components/auth/auth.component.scss'],
})
export class RegisterComponent implements OnInit {
    registerForm!: FormGroup<{
        userData: FormGroup<{
            name: FormControl<string>;
            userName: FormControl<string>;
            email: FormControl<string | null>;
            password: FormControl<string | null>;
            partnerNumber: FormControl<string | null>;
        }>;
        legendName: FormControl<string | null>;
        shirtSize: FormControl<string | null>;
        birthDate: FormControl<string | null>;
        address: FormControl<string | null>;
    }>;

    registerStep: number = 0;

    constructor(
        private navCtrl: NavController,
        private authService: AuthService,
    ) {}

    ngOnInit(): void {
        this.createRegisterForm();
    }

    login(): void {
        this.authService.updateLoggedState(true);
        this.navCtrl.navigateRoot('/collectibles');
    }

    submitRegisterForm() {
        if (this.registerForm.valid) {
            this.login();
        }
    }

    get userDataForm(): FormGroup {
        return this.registerForm.get('userData') as FormGroup;
    }

    createRegisterForm(): void {
        this.registerForm = new FormGroup({
            userData: new FormGroup({
                name: new FormControl('', Validators.required),
                userName: new FormControl('', Validators.required),
                email: new FormControl('', Validators.email),
                partnerNumber: new FormControl('', Validators.required),
                password: new FormControl('', Validators.required),
            }),
            birthDate: new FormControl('', Validators.required),
            shirtSize: new FormControl('', Validators.required),
            legendName: new FormControl('', Validators.required),
            address: new FormControl('', Validators.required),
        });
    }

    nextStep(): void {
        this.registerStep++;
    }

    navigateToResetPassword(): void {
        this.navCtrl.navigateForward('/auth/reset-password');
    }
}
