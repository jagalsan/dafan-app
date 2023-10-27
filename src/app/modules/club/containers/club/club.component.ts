import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { clubFeedsResponse } from '../../mocks/club-feeds.response';

@Component({
    selector: 'df-club',
    templateUrl: 'club.component.html',
    styleUrls: ['./club.component.scss'],
})
export class ClubComponent {
    ticketsPage: string =
        'https://boletomovil.com/evento/xoloitzcuintles-vs-atlas-2023-10-29?utm_campaign=sitioweb_xolos&utm_medium=sitio_xolos&utm_source=web_xolos';
    shopPage: string = 'https://xoloshop.com/collections/hombre';
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
