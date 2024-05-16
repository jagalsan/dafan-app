import { Component } from '@angular/core';
import { fantasyLeagueResponse } from '../../mocks/fantasy-league.response';

@Component({
    selector: 'df-fantasy-league',
    templateUrl: 'fantasy-league.component.html',
    styleUrls: ['./fantasy-league.component.scss'],
})
export class FantasyLeagueComponent {
    fantasyLeague = fantasyLeagueResponse;

    constructor() {}
}
