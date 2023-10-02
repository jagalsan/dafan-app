import { Component } from '@angular/core';
import {
    clubHistoryDecadesResponse,
    clubHistoryDescriptionResponse,
    clubHistoryTrophiesResponse,
} from '../../mocks/club-history.response';
import { environment } from '../../../../../environments/environment';

@Component({
    selector: 'df-club-history',
    templateUrl: 'club-history.component.html',
    styleUrls: ['./club-history.component.scss'],
})
export class ClubHistoryComponent {
    environment = environment;
    historyTabSelected: 'decades' | 'trophies' = 'decades';
    clubHistoryDescription = clubHistoryDescriptionResponse;
    clubHistoryTrophies = clubHistoryTrophiesResponse;
    clubHistoryDecades = clubHistoryDecadesResponse;

    constructor() {}
}
