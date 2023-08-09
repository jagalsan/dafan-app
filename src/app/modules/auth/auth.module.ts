import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth.routing';
import { IonicModule } from '@ionic/angular';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './containers/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './containers/register/register.component';
import { ResetPasswordComponent } from './containers/reset-password/reset-password.component';
import { WelcomeComponent } from './containers/welcome/welcome.component';

const COMPONENTS = [AuthComponent, RegisterComponent, ResetPasswordComponent, LoginComponent, WelcomeComponent];

@NgModule({
    imports: [IonicModule, HttpClientModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(authRoutes)],
    declarations: [COMPONENTS],
})
export class AuthModule {}
