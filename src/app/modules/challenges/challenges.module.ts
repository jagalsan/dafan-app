import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ChallengesComponent } from './containers/challenges/challenges.component';
import { RouterModule } from '@angular/router';
import { challengesRoutes } from './challenges.routing';
import { PhysicalChallengesComponent } from './components/physical-challenges/physical-challenges.component';

const COMPONENTS = [ChallengesComponent, PhysicalChallengesComponent];

@NgModule({
    imports: [IonicModule, CommonModule, RouterModule.forChild(challengesRoutes)],
    declarations: COMPONENTS,
})
export class ChallengesModule {}
