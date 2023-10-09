import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CollectibleFilter } from 'src/app/modules/collectibles/models/collectible.interface';

@Component({
    selector: 'df-collectibles-filter-modal',
    templateUrl: 'collectibles-filter-modal.component.html',
    styleUrls: ['./collectibles-filter-modal.component.scss'],
})
export class CollectiblesFilterModalComponent {
    filters: CollectibleFilter[];
    propertyFiltering: { name: string; value: string } = { name: '', value: '' };

    constructor(private modalCtrl: ModalController) {}

    close(): void {
        this.modalCtrl.dismiss();
    }

    applyFilter(): void {
        this.modalCtrl.dismiss({ property: this.propertyFiltering });
    }

    setPropertyFilter(_event: any, filterName: string) {
        this.propertyFiltering = _event.detail.value;
        this.propertyFiltering = {
            value: _event.detail.value,
            name: filterName,
        };
    }
}
