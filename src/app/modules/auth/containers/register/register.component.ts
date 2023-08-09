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
        name: FormControl<string>;
        userName: FormControl<string>;
        email: FormControl<string | null>;
        password: FormControl<string | null>;
    }>;

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

    createRegisterForm(): void {
        this.registerForm = new FormGroup({
            name: new FormControl('', Validators.required),
            userName: new FormControl('', Validators.required),
            email: new FormControl('', Validators.email),
            password: new FormControl('', Validators.required),
        });
    }

    navigateToResetPassword(): void {
        this.navCtrl.navigateForward('/auth/reset-password');
    }
}
