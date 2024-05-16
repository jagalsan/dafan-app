import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { profileRoutes } from './profile.routing';
import { ProfileComponent } from './containers/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [ProfileComponent];

@NgModule({
    imports: [IonicModule, CommonModule, RouterModule.forChild(profileRoutes), FormsModule, ReactiveFormsModule],
    declarations: COMPONENTS,
})
export class ProfileModule {}
