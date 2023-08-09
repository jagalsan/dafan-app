import { Routes } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { ResetPasswordComponent } from './containers/reset-password/reset-password.component';
import { WelcomeComponent } from './containers/welcome/welcome.component';

export const authRoutes: Routes = [
    {
        path: 'welcome',
        component: WelcomeComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'reset-password',
        component: ResetPasswordComponent,
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
];
