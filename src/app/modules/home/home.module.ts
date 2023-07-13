import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './containers/home/home.component';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routing';

const COMPONENTS = [HomeComponent];

@NgModule({
    imports: [IonicModule, CommonModule, RouterModule.forChild(homeRoutes)],
    declarations: COMPONENTS,
})
export class HomeModule {}
