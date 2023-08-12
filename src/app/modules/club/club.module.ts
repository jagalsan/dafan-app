import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { clubRoutes } from './club.routing';
import { ClubComponent } from './containers/club/club.component';

const COMPONENTS = [ClubComponent];

@NgModule({
    imports: [IonicModule, CommonModule, RouterModule.forChild(clubRoutes)],
    declarations: COMPONENTS,
})
export class ClubModule {}
