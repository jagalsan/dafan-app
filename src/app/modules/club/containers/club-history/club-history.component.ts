import { Component } from '@angular/core';

@Component({
    selector: 'df-club-history',
    templateUrl: 'club-history.component.html',
    styleUrls: ['./club-history.component.scss'],
})
export class ClubHistoryComponent {
    historyTabSelected: 'decades' | 'trophies' = 'decades';

    constructor() {}
}
