import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Collectible } from 'src/app/modules/collectibles/models/collectible.interface';

@Component({
    selector: 'df-collectibles-gallery',
    templateUrl: 'collectibles-gallery.component.html',
    styleUrls: ['collectibles-gallery.component.scss'],
})
export class CollectiblesGalleryComponent {
    @Input() collectibles: Collectible[];
    @Input() isMarket: boolean;
    @Input() cols: number = 1;
    @Output() readonly collectibleClicked: EventEmitter<string> = new EventEmitter();

    constructor() {}

    clickCollectible(collectibleHashId: string): void {
        this.collectibleClicked.emit(collectibleHashId);
    }
}
