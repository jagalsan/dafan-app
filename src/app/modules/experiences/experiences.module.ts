import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ExperiencesComponent } from './containers/experiences/experiences.component';
import { experiencesRoutes } from './experiences.routing';
import { ExperienceComponent } from './containers/experience/experience.component';
import { UtilsModule } from '../../utils/utils.module';

const COMPONENTS = [ExperiencesComponent, ExperienceComponent];

@NgModule({
    imports: [IonicModule, CommonModule, RouterModule.forChild(experiencesRoutes), UtilsModule],
    declarations: COMPONENTS,
})
export class ExperiencesModule {}
