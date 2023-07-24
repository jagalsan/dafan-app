import { NgModule } from '@angular/core';

import { CollectiblesGalleryComponent } from './components/collectibles-gallery/collectibles-gallery.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [IonicModule, CommonModule],
    exports: [CollectiblesGalleryComponent],
    declarations: [CollectiblesGalleryComponent],
    providers: [],
})
export class CollectiblesGalleryModule {}
