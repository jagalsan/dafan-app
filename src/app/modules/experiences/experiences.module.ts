import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ExperiencesComponent } from './containers/experiences/experiences.component';
import { experiencesRoutes } from './experiences.routing';

const COMPONENTS = [ExperiencesComponent];

@NgModule({
    imports: [IonicModule, CommonModule, RouterModule.forChild(experiencesRoutes)],
    declarations: COMPONENTS,
})
export class ExperiencesModule {}
