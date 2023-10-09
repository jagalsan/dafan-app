import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'df-login',
    templateUrl: 'login.component.html',
    styleUrls: ['../../components/auth/auth.component.scss'],
    styles: [
        `
            .sub-description {
                color: var(--color-white-text);
                font-size: 16px;
                font-weight: bold;
                text-align: center;
                margin-bottom: 32px;
                margin-top: -16px;
            }
        `,
    ],
})
export class LoginComponent implements OnInit {
    clubPrefix = environment.clubPrefix;
    loginForm!: FormGroup<{ email: FormControl<string | null>; password: FormControl<string | null> }>;

    constructor(
        private navCtrl: NavController,
        private authService: AuthService,
    ) {}

    ngOnInit(): void {
        this.createLoginForm();
    }

    login(): void {
        this.authService.updateLoggedState(true);
        this.navCtrl.navigateRoot('/collectibles');
    }

    submitLoginForm() {
        if (this.loginForm.valid) {
            this.login();
        }
    }

    createLoginForm(): void {
        this.loginForm = new FormGroup({
            email: new FormControl('', Validators.email),
            password: new FormControl(''),
        });
    }

    navigateToResetPassword(): void {
        this.navCtrl.navigateForward('/auth/reset-password');
    }
}
