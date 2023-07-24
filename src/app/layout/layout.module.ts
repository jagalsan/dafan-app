import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { mainRoutes } from './layout.routing';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [CommonModule, IonicModule, HttpClientModule, RouterModule.forChild(mainRoutes), SharedModule],
    declarations: [TabBarComponent, LayoutComponent, TopBarComponent],
})
export class LayoutModule {}
