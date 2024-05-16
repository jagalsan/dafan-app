import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CollectiblesComponent } from './containers/collectibles/collectibles.component';
import { RouterModule } from '@angular/router';
import { collectiblesRoutes } from './collectibles.routing';
import { CollectibleComponent } from './containers/collectible/collectible.component';
import { CollectiblesGalleryModule } from 'src/app/shared/modules/collectibles-gallery/collectibles-gallery.module';
import { UserCollectiblesComponent } from './containers/user-collectibles/user-collectibles.component';

const COMPONENTS = [CollectiblesComponent, CollectibleComponent, UserCollectiblesComponent];

@NgModule({
    imports: [IonicModule, CommonModule, RouterModule.forChild(collectiblesRoutes), CollectiblesGalleryModule],
    declarations: COMPONENTS,
})
export class CollectiblesModule {}
