import { Component, OnInit } from '@angular/core';
import { CollectiblesService } from '../../market.service';
import { User } from 'src/app/modules/auth/models/user.interface';
import { NavController } from '@ionic/angular';
import { Collectible } from 'src/app/modules/collectibles/models/collectible.interface';
import { fanPointsListedResponse } from '../../mocks/fan-tonkens-listed.response';

@Component({
    selector: 'df-market',
    templateUrl: 'market.component.html',
    styleUrls: ['./market.component.scss'],
})
export class MarketComponent implements OnInit {
    collectiblesListed!: Collectible[];
    userData!: User;
    galleryTabSelected: 'fanPoints' | 'collectibles' = 'collectibles';
    fanPointsListed = fanPointsListedResponse;

    constructor(
        private collectiblesService: CollectiblesService,
        private navCtrl: NavController,
    ) {}

    ngOnInit(): void {
        this.getCollectiblesListed();
    }

    getCollectiblesListed(): void {
        this.collectiblesListed = this.collectiblesService.getCollectiblesListed();
    }

    navigateCollectible(collectibleHashId: string): void {
        this.navCtrl.navigateForward(`/collectibles/${collectibleHashId}`);
    }
}
