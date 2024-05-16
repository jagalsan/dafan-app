import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { clubRoutes } from './club.routing';
import { ClubComponent } from './containers/club/club.component';
import { ClubHistoryComponent } from './containers/club-history/club-history.component';
import { ClubStadiumComponent } from './containers/club-stadium/club-stadium.component';

const COMPONENTS = [ClubComponent, ClubHistoryComponent, ClubStadiumComponent];

@NgModule({
    imports: [IonicModule, CommonModule, RouterModule.forChild(clubRoutes)],
    declarations: COMPONENTS,
})
export class ClubModule {}
