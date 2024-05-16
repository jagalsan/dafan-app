import { Component, OnInit } from '@angular/core';
import { Collectible } from '../../models/collectible.interface';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { User } from 'src/app/modules/auth/models/user.interface';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { collectiblesGalleryResponse } from 'src/app/modules/market/mocks/collectibles-gallery.response';
import { CollectiblesFilterModalComponent } from 'src/app/shared/components/collectibles-filter-modal/collectibles-filter-modal.component';
import { collectibleFiltersResponse } from '../../mocks/collectibles-filters.response';

@Component({
    selector: 'df-collectibles',
    templateUrl: 'collectibles.component.html',
    styleUrls: ['./collectibles.component.scss'],
})
export class CollectiblesComponent implements OnInit {
    collectibles!: Collectible[];
    userData!: User;
    colsNumber: number = 3;
    isFiltered: boolean;

    constructor(
        private authService: AuthService,
        private navCtrl: NavController,
        private modalController: ModalController,
        private loadingController: LoadingController,
    ) {}

    ngOnInit(): void {
        this.getCollectibles();
        this.getUserData();
    }

    getCollectibles(): void {
        this.collectibles = collectiblesGalleryResponse;
    }

    getUserData(): void {
        this.userData = this.authService.getUserData();
    }

    navigateCollectible(collectibleHashId: string): void {
        this.navCtrl.navigateForward(`/collectibles/${collectibleHashId}`);
    }

    changeColsNumber() {
        if (this.colsNumber === 2) this.colsNumber = 3;
        else this.colsNumber = 2;
    }

    async openFiltersModal(): Promise<void> {
        const modal = await this.modalController.create({
            component: CollectiblesFilterModalComponent,
            breakpoints: [1],
            initialBreakpoint: 1,
            cssClass: ['df-modal', 'df-modal--opacity'],
            componentProps: {
                filters: collectibleFiltersResponse,
            },
        });

        await modal.present();

        modal.onDidDismiss().then(async e => {
            if (e.data?.property?.name) {
                await this.showLoading();

                this.collectibles = this.collectibles.filter(collectible =>
                    collectible.properties.some(
                        property =>
                            property.name === e.data.property.name &&
                            property.value.toUpperCase() === (e.data.property.value as string).toUpperCase(),
                    ),
                );

                this.isFiltered = true;
            }
        });
    }

    async clearFilter(): Promise<void> {
        await this.showLoading();
        this.collectibles = collectiblesGalleryResponse;

        this.isFiltered = false;
    }

    async showLoading(): Promise<void> {
        const loading = await this.loadingController.create({
            message: 'Load collectibles...',
            duration: 1000,
        });

        loading.present();

        await loading.onWillDismiss();
    }

    async shuffleCollectibles(): Promise<void> {
        function compareRandom() {
            return Math.random() - 0.5;
        }

        const shuffledArray = [...this.collectibles];
        shuffledArray.sort(compareRandom);

        await this.showLoading();
        this.isFiltered = true;

        this.collectibles = shuffledArray;
    }
}
