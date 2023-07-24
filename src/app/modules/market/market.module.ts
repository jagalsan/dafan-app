import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { marketRoutes } from './market.routing';
import { MarketComponent } from './containers/market/market.component';
import { CollectiblesGalleryModule } from 'src/app/shared/modules/collectibles-gallery/collectibles-gallery.module';

const COMPONENTS = [MarketComponent];

@NgModule({
    imports: [IonicModule, CommonModule, RouterModule.forChild(marketRoutes), CollectiblesGalleryModule],
    declarations: COMPONENTS,
})
export class MarketModule {}
