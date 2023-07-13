import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { mainRoutes } from './layout.routing';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, IonicModule, HttpClientModule, RouterModule.forChild(mainRoutes)],
    declarations: [TabBarComponent, LayoutComponent],
})
export class LayoutModule {}
