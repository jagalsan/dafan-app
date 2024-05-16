import { Component, OnInit } from '@angular/core';
import { CollectiblesService } from '../../collectibles.service';
import { Collectible } from '../../models/collectible.interface';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { User } from 'src/app/modules/auth/models/user.interface';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'df-user-collectibles',
    templateUrl: 'user-collectibles.component.html',
    styleUrls: ['./user-collectibles.component.scss'],
})
export class UserCollectiblesComponent implements OnInit {
    collectibles!: Collectible[];
    userData!: User;

    constructor(
        private collectiblesService: CollectiblesService,
        private authService: AuthService,
        private navCtrl: NavController,
    ) {}

    ngOnInit(): void {
        this.getCollectibles();
        this.getUserData();
    }

    getCollectibles(): void {
        this.collectibles = this.collectiblesService.getCollectibles();
    }

    getUserData(): void {
        this.userData = this.authService.getUserData();
    }

    navigateCollectible(collectibleHashId: string): void {
        this.navCtrl.navigateForward(`/collectibles/${collectibleHashId}`);
    }

    navigateGallery(): void {
        this.navCtrl.navigateForward('/collectibles/gallery');
    }
}
