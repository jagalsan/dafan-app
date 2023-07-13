import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth.routing';
import { IonicModule } from '@ionic/angular';
import { AuthLayoutComponent } from './containers/auth-layout/auth-layout.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [AuthLayoutComponent, RegisterComponent, ResetPasswordComponent, LoginComponent];

@NgModule({
    imports: [IonicModule, HttpClientModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(authRoutes)],
    declarations: [COMPONENTS],
})
export class AuthModule {}
