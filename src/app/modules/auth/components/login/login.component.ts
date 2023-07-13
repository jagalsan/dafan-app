import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'df-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
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
        this.navCtrl.navigateRoot('/home');
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
}
