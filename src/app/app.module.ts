import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { routes } from './app.routing';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [AppComponent],
    imports: [CommonModule, BrowserModule, IonicModule.forRoot(), RouterModule.forRoot(routes)],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    bootstrap: [AppComponent],
})
export class AppModule {}
