import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { clubFeedsResponse } from '../../mocks/club-feeds.response';

@Component({
    selector: 'df-club',
    templateUrl: 'club.component.html',
    styleUrls: ['./club.component.scss'],
})
export class ClubComponent {
    ticketsPage: string = 'https://bancada.rcdeportivo.es/';
    shopPage: string = 'https://deportienda.es/es/';
    clubFeeds = clubFeedsResponse;

    constructor(private navCtrl: NavController) {}

    navigateToTickets(): void {
        window.location.assign(this.ticketsPage);
    }

    navigateToShop(): void {
        window.location.assign(this.shopPage);
    }

    navigateToHistory(): void {
        this.navCtrl.navigateForward('/club/history');
    }

    navigateToStadium(): void {
        this.navCtrl.navigateForward('/club/stadium');
    }
}
